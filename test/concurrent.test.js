
import { sayHelloAsync } from "../src/async";

test.todo("Create async await with concurrent");

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Ridwan")).resolves.toBe("Hello Ridwan");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Ridwan")).resolves.toBe("Hello Ridwan");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Ridwan")).resolves.toBe("Hello Ridwan");
});
