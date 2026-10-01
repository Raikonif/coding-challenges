"""Paréntesis válidos (master).

Source exercise: https://coding-challenges.dev/problems/parentesis-validos
The full prompt and examples are recorded in catalog/coding-challenges.json.
"""

from python.platform_solutions import solve_challenge


def solve(*args):
    """Solve the Paréntesis válidos challenge."""
    return solve_challenge("parentesis-validos", *args)

is_valid_parentheses = solve
