
beforeAll(() => console.log("1 - Before All Outer"));
afterAll(() => console.log("1 - After All Outer"));

beforeEach(() => console.log("1 - Before Each Outer"));
afterEach(() => console.log("1 - After Each Outer"));

test("test outer", () => {
    console.log("Test Outer");
});

describe("inner", () => {

    beforeAll(() => console.log("2 - Before All Inner"));
    afterAll(() => console.log("2 - After All Inner"));

    beforeEach(() => console.log("2 - Before Each Inner"));
    afterEach(() => console.log("2 - After Each Inner"));

    test("test inner", () => {
        console.log("Test Inner");
    });
});
