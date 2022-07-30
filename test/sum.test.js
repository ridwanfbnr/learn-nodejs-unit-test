
import { sum, sumAll } from "../src/sum.js";

test("test sum function", () => {
    const result = sum(3, 3);

    expect(result).toBe(6);
});

test("test sum function 2", () => {
    const result = sum(3, 2);

    expect(result).toBe(5);
});

test("test sum function 3", () => {
    const result = sum(3, 1);

    expect(result).toBe(4);
});

test("test sum all", () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(sumAll(numbers)).toBe(15);
});
