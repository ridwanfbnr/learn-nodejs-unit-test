
import { calculated } from "../src/sum.js";

test("test mock matchers", () => {
    const callback = jest.fn();

    calculated([10, 10, 10], callback);
    calculated([10, 10, 10, 10, 10], callback);
    
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(30);
    expect(callback).toHaveBeenCalledWith(50);
})