
import { sayHello } from "../src/sayHello.js";
import {sum} from "../src/sum.js";

test("sayHello success", () => {
    expect(sayHello("Ridwan")).toBe("Hello Ridwan");
});

test.failing("sayHello error", () => {
    expect(sayHello()).toBe("Hello Ridwan");
});

test("sayHello error matchers", () => {
    expect(() => sayHello(null)).toThrow();
});


test.failing("sum error", () => {
    expect(sum(2, 2)).toBe(5);
});
