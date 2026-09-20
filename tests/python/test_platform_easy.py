"""Test cases copied from Coding Challenges' Easy Python exercises."""

from contextlib import redirect_stdout
import importlib.util
import io
from pathlib import Path
import unittest


PYTHON_DIR = Path(__file__).parents[2] / "python"


def load_exercise(filename: str):
    path = PYTHON_DIR / filename
    spec = importlib.util.spec_from_file_location(path.stem, path)
    module = importlib.util.module_from_spec(spec)
    with redirect_stdout(io.StringIO()):
        spec.loader.exec_module(module)
    return module


def assert_cases(test: unittest.TestCase, function, cases):
    for args, expected in cases:
        with test.subTest(args=args):
            test.assertEqual(function(*args), expected)


class PlatformEasyPythonTests(unittest.TestCase):
    def test_at_least_one_true(self):
        fn = load_exercise("01_at_least_one_true.py").at_least_one_true
        assert_cases(self, fn, [
            ((True, True), True),
            ((True, False), True),
            ((False, True), True),
            ((False, False), False),
        ])

    def test_both_true(self):
        fn = load_exercise("02_both_are_true.py").both_true
        assert_cases(self, fn, [
            ((True, True), True),
            ((True, False), False),
            ((False, True), False),
            ((False, False), False),
        ])

    def test_contains_char(self):
        fn = load_exercise("03_contains_char.py").contains_char
        assert_cases(self, fn, [
            (("hola", "o"), True),
            (("hola", "z"), False),
            (("abc", "a"), True),
        ])

    def test_starts_with(self):
        fn = load_exercise("04_starts_with.py").starts_with
        assert_cases(self, fn, [
            (("hola mundo", "hola"), True),
            (("hola mundo", "Hola"), False),
            (("TypeScript", "Type"), True),
            (("TypeScript", "script"), False),
            (("abc", ""), True),
            (("", ""), True),
            (("ab", "abc"), False),
        ])

    def test_perfect_square(self):
        fn = load_exercise("07_is_perfect_square.py").is_perfect_square
        assert_cases(self, fn, [
            ((0,), True), ((1,), True), ((4,), True),
            ((14,), False), ((25,), True), ((26,), False),
        ])

    def test_is_divisible(self):
        fn = load_exercise("05_is_divisible.py").is_divisible
        assert_cases(self, fn, [
            ((10, 2), True), ((9, 3), True),
            ((7, 2), False), ((100, 10), True),
        ])

    def test_is_integer(self):
        fn = load_exercise("06_is_integer.py").is_integer
        assert_cases(self, fn, [
            ((5,), True), ((3.14,), False), ((0,), True), ((-7,), True),
        ])

    def test_is_multiple(self):
        fn = load_exercise("08_is_multiple.py").is_multiple
        assert_cases(self, fn, [
            ((10, 2), True), ((9, 3), True), ((7, 2), False),
            ((0, 5), True), ((5, 0), False),
        ])

    def test_is_even(self):
        fn = load_exercise("09_is_even.py").is_even
        assert_cases(self, fn, [((4,), True), ((7,), False)])

    def test_is_positive(self):
        fn = load_exercise("10_is_positive.py").is_positive
        assert_cases(self, fn, [((5,), True), ((-3,), False), ((0,), False)])

    def test_is_number_valid(self):
        fn = load_exercise("11_is_number_valid.py").es_numero_valido
        assert_cases(self, fn, [
            (("42",), True), (("-3.14",), True), (("0.5",), True),
            (("abc",), False), (("12 34",), False), (("",), False),
            (("--5",), False), (("-",), False),
        ])

    def test_is_pangram(self):
        fn = load_exercise("12_is_pangram.py").is_pangram
        assert_cases(self, fn, [
            (("The quick brown fox jumps over the lazy dog",), True),
            (("Hello world",), False),
            (("Pack my box with five dozen liquor jugs",), True),
            (("",), False), (("abcdefghijklmnopqrstuvwxyz",), True),
            (("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",), True),
        ])

    def test_is_in_range(self):
        fn = load_exercise("13_is_in_range.py").is_in_range
        assert_cases(self, fn, [
            ((5, 1, 10), True), ((0, 1, 10), False),
            ((10, 1, 10), True), ((1, 1, 10), True),
            ((-3, -5, -1), True), ((11, 1, 10), False),
            ((5, 5, 5), True),
        ])

    def test_ends_with_suffix(self):
        fn = load_exercise("14_ends_with_suffix.py").ends_with_suffix
        assert_cases(self, fn, [
            (("hola mundo", "mundo"), True), (("coding", "go"), False),
            (("abc", ""), True), (("ab", "abc"), False),
            (("javascript", "script"), True), (("hello", "hello"), True),
            (("", ""), True),
        ])

    def test_get_property(self):
        fn = load_exercise("15_get_property.py").get_property
        assert_cases(self, fn, [
            (({"nombre": "Ana", "edad": 25}, "nombre"), "Ana"),
            (({"nombre": "Ana", "edad": 25}, "edad"), 25),
            (({"activo": True}, "activo"), True),
            (({"puntos": 99}, "puntos"), 99),
        ])

    def test_is_leap_year(self):
        fn = load_exercise("16_is_leap_year.py").is_leap_year
        assert_cases(self, fn, [
            ((2000,), True), ((1900,), False), ((2024,), True),
            ((1999,), False), ((2100,), False), ((400,), True),
        ])

    def test_flatten_one_level(self):
        fn = load_exercise("17_flatten_one_level.py").flatten_one_level
        assert_cases(self, fn, [
            (([1, [2, 3], [4, 5]],), [1, 2, 3, 4, 5]),
            (([[1, 2], [3, 4]],), [1, 2, 3, 4]),
            (([[]],), []), (([1, 2, 3],), [1, 2, 3]),
            (([1, [2, [3, 4]], 5],), [1, 2, [3, 4], 5]),
            (([10, [20, 30], [40, [50]]],), [10, 20, 30, 40, [50]]),
        ])

    def test_calculate_imc(self):
        fn = load_exercise("18_calculate_imc.py").calculate_imc
        assert_cases(self, fn, [
            ((70, 1.75), 22.86), ((80, 1.75), 26.12),
            ((50, 1.75), 16.33), ((90, 1.8), 27.78),
            ((60, 1.65), 22.04),
        ])

    def test_average(self):
        fn = load_exercise("19_average.py").average
        assert_cases(self, fn, [
            (([1, 2, 3, 4, 5],), 3.0), (([10, 20, 30],), 20.0),
            (([7],), 7.0), (([],), 0.0), (([2, 4, 6, 8, 10, 12],), 7.0),
        ])

    def test_capitalize_first_letter(self):
        fn = load_exercise("20_capitalize_first_letter.py").capitalize_first_letter
        assert_cases(self, fn, [
            (("hola",), "Hola"), (("mundo",), "Mundo"), (("",), ""),
            (("TypeScript",), "TypeScript"),
            (("javaScript es genial",), "JavaScript es genial"),
            (("a",), "A"),
        ])

    def test_most_frequent_char(self):
        fn = load_exercise("21_most_frequent_char.py").most_frequent_char
        assert_cases(self, fn, [
            (("aabbbc",), "b"), (("abcd",), "a"), (("zzz",), "z"),
            (("a",), "a"), (("aabbbcc",), "b"), (("hello world",), "l"),
        ])

    def test_common_chars(self):
        fn = load_exercise("22_common_chars.py").common_chars
        assert_cases(self, fn, [
            (("hello", "world"), 2), (("abc", "ABC"), 3),
            (("abcd", "efgh"), 0), (("", "hello"), 0),
            (("typescript", "javascript"), 6),
        ])

    def test_celsius_to_fahrenheit(self):
        fn = load_exercise("23_celsius_to_fahrenheit.py").celsius_to_fahrenheit
        assert_cases(self, fn, [
            ((0,), 32), ((100,), 212), ((37,), 98.6),
            ((-40,), -40), ((25,), 77), ((-273.15,), -459.67),
        ])

    def test_rot13(self):
        fn = load_exercise("24_rot13.py").rot13
        assert_cases(self, fn, [
            (("Hello",), "Uryyb"), (("World!",), "Jbeyq!"),
            (("abc",), "nop"), (("ABC",), "NOP"),
            (("Hello, World!",), "Uryyb, Jbeyq!"), (("",), ""),
            (("12345",), "12345"),
        ])

    def test_clamp_number(self):
        fn = load_exercise("25_clamp_number.py").clamp_number
        assert_cases(self, fn, [
            ((5, 1, 10), 5), ((0, 1, 10), 1), ((15, 1, 10), 10),
            ((1, 1, 10), 1), ((10, 1, 10), 10),
        ])

    def test_count_unique_chars(self):
        fn = load_exercise("26_count_unique_chars.py").count_unique_chars
        assert_cases(self, fn, [
            (("hello",), 4), (("aabbcc",), 3), (("abcABC",), 6),
            (("",), 0), (("a b c",), 4), (("aaaaaaa",), 1),
        ])

    def test_count_consonants(self):
        fn = load_exercise("27_count_consonants.py").count_consonants
        assert_cases(self, fn, [
            (("Hola Mundo",), 5), (("aeiou",), 0), (("",), 0),
            (("123 abc!",), 2), (("TypeScript",), 8),
            (("BCDFGHJKLMNPQRSTVWXYZ",), 21),
        ])

    def test_count_digits(self):
        fn = load_exercise("28_count_digits.py").count_digits
        assert_cases(self, fn, [
            ((12345,), 5), ((0,), 1), ((-42,), 2),
            ((7,), 1), ((1000000,), 7),
        ])

    def test_count_in_range(self):
        fn = load_exercise("29_count_in_range.py").contar_en_rango
        assert_cases(self, fn, [
            (([1, 5, 3, 8, 2, 7], 2, 6), 3),
            (([10, 20, 30], 15, 25), 1), (([], 1, 10), 0),
            (([-5, -3, 0, 4, 7], -4, 2), 2),
            (([5, 5, 5, 5], 5, 5), 4),
        ])

    def test_count_above_average(self):
        fn = load_exercise("30_count_above_average.py").count_above_average
        assert_cases(self, fn, [
            (([1, 2, 3, 4, 5],), 2), (([10, 10, 10],), 0),
            (([],), 0), (([5],), 0), (([-3, -1, 0, 2, 4],), 2),
            (([1, 2, 3],), 1),
        ])


if __name__ == "__main__":
    unittest.main()
