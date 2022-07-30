
import { sayHelloAsync } from "../src/async.js";

test("async function", async () => {
    const result = await sayHelloAsync("Ridwan");

    expect(result).toBe("Hello Ridwan");
});

test("async matchers", async () => {
    await expect(sayHelloAsync("Ridwan")).resolves.toBe("Hello Ridwan");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
