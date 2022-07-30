
import { sumAll } from "../src/sum.js";

const tableSum = [
    [
        [10, 10, 10], 30
    ],
    [
        [10, 10, 10, 10, 10], 50
    ],
    [
        [10, 10, 10, 10, 10, 10, 10], 70
    ]
];

test.todo("Create test for sumAll() with function each");

test.each(tableSum)("test sumAll(%s), should result(%i)", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
});
