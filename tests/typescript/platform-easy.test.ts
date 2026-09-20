import { strict as assert } from "node:assert";
import { test } from "node:test";

import { atLeastOneTrue } from "../../typescript/01-at-least-one-true";
import { bothTrue } from "../../typescript/02-both-are-true";
import { containsChar } from "../../typescript/03-contains-char";
import { startsWith } from "../../typescript/04-starts-with";
import { isDivisible } from "../../typescript/05-is-divisible";
import { isInteger } from "../../typescript/06-is-integer";
import { isPerfectSquare } from "../../typescript/07-is-perfect-square";
import { isMultiple } from "../../typescript/08-is-multiple";
import { isPalindrome } from "../../typescript/09-is-palindrome";
import { isEven } from "../../typescript/10-is-even";
import { isPositive } from "../../typescript/11-is-positive";
import { esNumeroValido } from "../../typescript/12-is-number-valid";
import { isPangram } from "../../typescript/13-is-pangram";
import { isInRange } from "../../typescript/14-is-in-range";
import { endsWithSuffix } from "../../typescript/15-ends-with-suffix";
import { getProperty } from "../../typescript/16-get-property";
import { isLeapYear } from "../../typescript/17-is-leap-year";
import { flattenOneLevel } from "../../typescript/18-flatten-one-level";
import { calculateIMC } from "../../typescript/19-calculate-imc";
import { capitalizeFirstLetter } from "../../typescript/20-capitalize-first-letter";
import { mostFrequentChar } from "../../typescript/21-most-frequent-char";
import { commonChars } from "../../typescript/22-common-chars";
import { celsiusToFahrenheit } from "../../typescript/23-celsius-to-fahrenheit";
import { rot13 } from "../../typescript/24-rot13";
import { clampNumber } from "../../typescript/25-clamp-number";
import { countUniqueChars } from "../../typescript/26-count-unique-chars";
import { countConsonants } from "../../typescript/27-count-consonants";
import { countDigits } from "../../typescript/28-count-digits";
import { contarEnRango } from "../../typescript/29-count-in-range";
import { countAboveAverage } from "../../typescript/30-count-above-average";

type AnyFunction = (...args: any[]) => unknown;
type Case = [args: unknown[], expected: unknown];

function platformCases(name: string, fn: AnyFunction, cases: Case[]) {
  for (const [args, expected] of cases) {
    test(`${name} ${JSON.stringify(args)}`, () => {
      assert.deepEqual(fn(...args), expected);
    });
  }
}

platformCases("atLeastOneTrue", atLeastOneTrue, [
  [[true, true], true], [[true, false], true],
  [[false, true], true], [[false, false], false],
]);

platformCases("bothTrue", bothTrue, [
  [[true, true], true], [[true, false], false],
  [[false, true], false], [[false, false], false],
]);

platformCases("containsChar", containsChar, [
  [["hola", "o"], true], [["hola", "z"], false], [["abc", "a"], true],
]);

platformCases("startsWith", startsWith, [
  [["hola mundo", "hola"], true], [["hola mundo", "Hola"], false],
  [["TypeScript", "Type"], true], [["TypeScript", "script"], false],
  [["abc", ""], true], [["", ""], true], [["ab", "abc"], false],
]);

platformCases("isPerfectSquare", isPerfectSquare, [
  [[0], true], [[1], true], [[4], true], [[14], false], [[25], true], [[26], false],
]);

platformCases("isDivisible", isDivisible, [
  [[10, 2], true], [[9, 3], true], [[7, 2], false], [[100, 10], true],
]);

platformCases("isInteger", isInteger, [
  [[5], true], [[3.14], false], [[0], true], [[-7], true],
]);

platformCases("isMultiple", isMultiple, [
  [[10, 2], true], [[9, 3], true], [[7, 2], false],
  [[0, 5], true], [[5, 0], false],
]);

platformCases("isPalindrome", isPalindrome, [
  [["racecar"], true], [["hello"], false], [["Aba"], true],
  [["A"], true], [[""], true],
]);

platformCases("isEven", isEven, [[[4], true], [[7], false]]);

platformCases("isPositive", isPositive, [
  [[5], true], [[-3], false], [[0], false],
]);

platformCases("esNumeroValido", esNumeroValido, [
  [["42"], true], [["-3.14"], true], [["0.5"], true],
  [["abc"], false], [["12 34"], false], [[""], false],
  [["--5"], false], [["-"], false],
]);

platformCases("isPangram", isPangram, [
  [["The quick brown fox jumps over the lazy dog"], true],
  [["Hello world"], false], [["Pack my box with five dozen liquor jugs"], true],
  [[""], false], [["abcdefghijklmnopqrstuvwxyz"], true],
  [["THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"], true],
]);

platformCases("isInRange", isInRange, [
  [[5, 1, 10], true], [[0, 1, 10], false], [[10, 1, 10], true],
  [[1, 1, 10], true], [[-3, -5, -1], true], [[11, 1, 10], false],
  [[5, 5, 5], true],
]);

platformCases("endsWithSuffix", endsWithSuffix, [
  [["hola mundo", "mundo"], true], [["coding", "go"], false],
  [["abc", ""], true], [["ab", "abc"], false],
  [["javascript", "script"], true], [["hello", "hello"], true],
  [["", ""], true],
]);

platformCases("getProperty", getProperty, [
  [[{ nombre: "Ana", edad: 25 }, "nombre"], "Ana"],
  [[{ nombre: "Ana", edad: 25 }, "edad"], 25],
  [[{ activo: true }, "activo"], true], [[{ puntos: 99 }, "puntos"], 99],
]);

platformCases("isLeapYear", isLeapYear, [
  [[2000], true], [[1900], false], [[2024], true],
  [[1999], false], [[2100], false], [[400], true],
]);

platformCases("flattenOneLevel", flattenOneLevel, [
  [[[1, [2, 3], [4, 5]]], [1, 2, 3, 4, 5]],
  [[[[1, 2], [3, 4]]], [1, 2, 3, 4]],
  [[[[]]], []], [[[1, 2, 3]], [1, 2, 3]],
  [[[1, [2, [3, 4]], 5]], [1, 2, [3, 4], 5]],
  [[[10, [20, 30], [40, [50]]]], [10, 20, 30, 40, [50]]],
]);

platformCases("calculateIMC", calculateIMC, [
  [[70, 1.75], 22.86], [[80, 1.75], 26.12], [[50, 1.75], 16.33],
  [[90, 1.8], 27.78], [[60, 1.65], 22.04],
]);

platformCases("capitalizeFirstLetter", capitalizeFirstLetter, [
  [["hola"], "Hola"], [["mundo"], "Mundo"], [[""], ""],
  [["TypeScript"], "TypeScript"], [["javaScript es genial"], "JavaScript es genial"],
  [["a"], "A"],
]);

platformCases("mostFrequentChar", mostFrequentChar, [
  [["aabbbc"], "b"], [["abcd"], "a"], [["zzz"], "z"],
  [["a"], "a"], [["aabbbcc"], "b"], [["hello world"], "l"],
]);

platformCases("commonChars", commonChars, [
  [["hello", "world"], 2], [["abc", "ABC"], 3],
  [["abcd", "efgh"], 0], [["", "hello"], 0],
  [["typescript", "javascript"], 6],
]);

platformCases("celsiusToFahrenheit", celsiusToFahrenheit, [
  [[0], 32], [[100], 212], [[37], 98.6], [[-40], -40],
  [[25], 77], [[-273.15], -459.67],
]);

platformCases("rot13", rot13, [
  [["Hello"], "Uryyb"], [["World!"], "Jbeyq!"], [["abc"], "nop"],
  [["ABC"], "NOP"], [["Hello, World!"], "Uryyb, Jbeyq!"],
  [[""], ""], [["12345"], "12345"],
]);

platformCases("clampNumber", clampNumber, [
  [[5, 1, 10], 5], [[0, 1, 10], 1], [[15, 1, 10], 10],
  [[1, 1, 10], 1], [[10, 1, 10], 10],
]);

platformCases("countUniqueChars", countUniqueChars, [
  [["hello"], 4], [["aabbcc"], 3], [["abcABC"], 6],
  [[""], 0], [["a b c"], 4], [["aaaaaaa"], 1],
]);

platformCases("countConsonants", countConsonants, [
  [["Hola Mundo"], 5], [["aeiou"], 0], [[""], 0],
  [["123 abc!"], 2], [["TypeScript"], 8],
  [["BCDFGHJKLMNPQRSTVWXYZ"], 21],
]);

platformCases("countDigits", countDigits, [
  [[12345], 5], [[0], 1], [[-42], 2], [[7], 1], [[1000000], 7],
]);

platformCases("contarEnRango", contarEnRango, [
  [[[1, 5, 3, 8, 2, 7], 2, 6], 3],
  [[[10, 20, 30], 15, 25], 1], [[[], 1, 10], 0],
  [[[-5, -3, 0, 4, 7], -4, 2], 2],
  [[[5, 5, 5, 5], 5, 5], 4],
]);

platformCases("countAboveAverage", countAboveAverage, [
  [[[1, 2, 3, 4, 5]], 2], [[[10, 10, 10]], 0], [[[ ]], 0],
  [[[5]], 0], [[[-3, -1, 0, 2, 4]], 2], [[[1, 2, 3]], 1],
]);
