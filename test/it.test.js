
import { sumAll } from "../src/sum.js";

describe("when call sumAll()", () => {
    it("should return 30 the sumAll()", () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });

    it("should return 80 the sumAll()", () => {
        expect(sumAll([30, 20, 30])).toBe(80);
    });
});
