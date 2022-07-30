
test("test number", () => {

    const value = 2 + 3;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(5);

    expect(value).toBeLessThan(7);
    expect(value).toBeGreaterThanOrEqual(5);

    expect(value).toBe(5);
})
