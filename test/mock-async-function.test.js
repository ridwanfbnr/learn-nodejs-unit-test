
import { getBalance } from "../src/async.js";

test("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(5000);

    await expect(getBalance("Ridwan", from)).resolves.toEqual({
        name: "Ridwan",
        from: 5000
    });

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(5000);
});

test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"));

    await getBalance("Ridwan", from)
});

test("mock async function error matchers", () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    expect(getBalance("Ridwan", from)).rejects.toBe("Rejected");
});
