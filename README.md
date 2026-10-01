# Coding Challenges

This repository contains **261 Coding Challenges.dev exercises**, with one
Python and one TypeScript implementation for every exercise. The original 31
beginner exercises remain in place; the other 230 are cataloged in
[`catalog/coding-challenges.json`](catalog/coding-challenges.json). Each added
module links to its source prompt, and the catalog records the prompt, language
availability, and runnable examples. Exercises available in only one source
language are included in both folders.

The implementations live in `python/` and `typescript/`. Their three-digit
prefixes identify the repository exercise number, from 032 through 261 for the
new catalog entries.

## Tests

The catalog suite imports all 230 added exercises and checks 542 example cases
across 165 exercises. The other 65 are smoke-called with prompt inputs when
available. The original 31 Python exercises remain covered by
`tests/python/test_platform_easy.py`.

Run Python tests from the repository root with:

```sh
python -m unittest discover -s tests/python
```

The TypeScript tests use `node:test` and require a runner that supports
TypeScript files. `tests/typescript/platform-catalog.test.ts` covers the same
catalog examples and modules; `tests/typescript/platform-easy.test.ts` covers
the original 31 exercises. Run both suites with:

```sh
node --experimental-strip-types --test tests/typescript/platform-catalog.test.ts tests/typescript/platform-easy.test.ts
```
