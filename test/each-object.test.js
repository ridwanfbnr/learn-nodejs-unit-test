
import { sumAll } from "../src/sum.js";

const tableSum = [
    {
        numbers: [10, 10, 10],
        expected: 30
    },
    {
        numbers: [10, 10, 10, 10, 10],
        expected: 50
    },
    {
        numbers: [10, 10, 10, 10, 10, 10, 10],
        expected: 70
    },
];

test.each(tableSum)("test sumAll($numbers), should result($expected)", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
});


const table = [
    { a: 2, b: 3, expected: 6 },
    { a: 3, b: 3, expected: 9 },
    { a: 3, b: 4, expected: 12 },
];

test.each(table)("test a: $a * b: $b, should return $expected", ({ a, b, expected }) => {
    expect(a * b).toBe(expected);
});
