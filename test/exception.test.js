
import { callMe, MyException } from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("Ridwan")).toThrow();
    expect(() => callMe("Ridwan")).toThrow(MyException);
    expect(() => callMe("Ridwan")).toThrow("Ups my exception happens");
});

test("exception not happens", () => {
    expect(callMe("Budi")).toBe("OK");
});
