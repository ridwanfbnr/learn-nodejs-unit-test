
test("string not", () => {
    const name = "Eko Kurniawan Khannedy";

    expect(name).not.toBe("Ridwan");
    expect(name).not.toEqual("Ridwan");
    expect(name).not.toMatch(/Ridwan/);
});

test("number not", () => {
    const value = 2 + 3;

    expect(value).not.toBe(3);
    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(4);
});
