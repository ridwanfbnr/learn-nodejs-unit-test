
import { calculated, calculateAndReturn } from "../src/sum";

test("test calculated", () => {
    const callback = jest.fn();

    calculated([10, 10, 10], callback);
    calculated([10, 10, 10, 10, 10,], callback);
    
    expect(callback.mock.calls.length).toBe(2);

    console.log(callback.mock.calls);

    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
});

test("test calculated without mock function", () => {
    const result = (total) => {
        return total;
    };

    calculated([10, 10, 10], result);
    calculated([10, 10, 10, 10, 10, 10], result);
});

test("test mock return value", () => {
    const result = jest.fn();

    result.mockReturnValueOnce(40);
    result.mockReturnValueOnce(80);

    expect(calculateAndReturn([10, 10, 10], result)).toBe(40);
    expect(calculateAndReturn([10, 10, 10, 10, 10], result)).toBe(80);

    expect(result.mock.results[0].value).toBe(40);
    expect(result.mock.results[1].value).toBe(80);
});

test("test mock implementation", () => {
    const result = jest.fn();
    result.mockImplementation((total) => {
        return total * 2;
    });

    expect(calculateAndReturn([10, 10, 10], result)).toBe(60);
    expect(calculateAndReturn([10, 10, 10, 10, 10], result)).toBe(100);

    expect(result.mock.results[0].value).toBe(60);
    expect(result.mock.results[1].value).toBe(100);
})
