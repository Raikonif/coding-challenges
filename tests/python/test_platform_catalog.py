import importlib.util
import json
import unittest
from contextlib import redirect_stdout
from io import StringIO
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
PYTHON_DIR = ROOT / "python"
CATALOG = json.loads((ROOT / "catalog" / "coding-challenges.json").read_text())


def load_exercise(number: int, slug: str):
    filename = f"{number:03d}_{slug.replace('-', '_')}.py"
    path = PYTHON_DIR / filename
    spec = importlib.util.spec_from_file_location(f"platform_exercise_{number}", path)
    module = importlib.util.module_from_spec(spec)
    with redirect_stdout(StringIO()):
        spec.loader.exec_module(module)
    return module


def expected_value(value):
    if isinstance(value, dict):
        if value == {"$undefined": True}:
            return None
        return {key: expected_value(nested) for key, nested in value.items()}
    if isinstance(value, list):
        return [expected_value(item) for item in value]
    return value


class PlatformCatalogPythonTests(unittest.TestCase):
    def test_all_catalog_exercises_and_examples(self):
        self.assertEqual(len(CATALOG), 230)
        for exercise in CATALOG:
            module = load_exercise(exercise["number"], exercise["id"])
            self.assertTrue(callable(module.solve), exercise["id"])
            with self.subTest(exercise=exercise["id"]):
                if exercise["cases"]:
                    for case in exercise["cases"]:
                        with self.subTest(args=case["args"]):
                            actual = module.solve(*case["args"])
                            self.assertEqual(actual, expected_value(case["expected"]))
                elif exercise["smokeArgs"]:
                    module.solve(*exercise["smokeArgs"])


if __name__ == "__main__":
    unittest.main()
