# Coding Challenges

This repository contains **261 Coding Challenges.dev exercises**, with a Python
and TypeScript practice file for every exercise. The original 31 beginner
exercises remain implemented. The other 230 are starter exercises cataloged in
[`catalog/coding-challenges.json`](catalog/coding-challenges.json). Each
starter file includes its prompt and source link; exercises available in only
one source language are included in both language folders.

The added exercises contain TODO stubs instead of solutions. Their tests are
intentionally expected to fail until you implement the exercises. The
three-digit prefixes identify exercise numbers 032 through 261.

## Tests

The catalog suite checks 542 example cases across 165 exercises. The remaining
65 have smoke-only tests: 17 use inputs recorded in the catalog, and 48
currently have no recorded smoke inputs, so their tests call the named function
with no arguments. Python creates one test per exercise, so you can run an
individual challenge by its number and slug. TypeScript also registers one test
per exercise.

Run all Python tests from the repository root with:

```sh
python -m unittest discover -s tests/python
```

Run one Python catalog exercise, for example:

```sh
python -m unittest discover -s tests/python -p test_platform_catalog.py -k 032_suma_dos_numeros
```

The TypeScript tests use `node:test` and require a runner that supports
TypeScript files. Run both the catalog suite and the original 31 exercise tests
with:

```sh
node --experimental-strip-types --test tests/typescript/platform-catalog.test.ts tests/typescript/platform-easy.test.ts
```

Run one TypeScript catalog exercise by name with:

```sh
node --experimental-strip-types --test --test-name-pattern="032 Suma de dos números" tests/typescript/platform-catalog.test.ts
```
