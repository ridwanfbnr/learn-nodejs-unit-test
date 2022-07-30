
test("truthiness", () => {
    let value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();
    expect(value).not.toBeTruthy();
    expect(value).not.toBeUndefined();

    value = undefined;
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();
    expect(value).not.toBeNull();
    expect(value).not.toBeTruthy();
    expect(value).not.toBeDefined();

    value = "Ridwan";
    expect(value).toBeTruthy();
    expect(value).toBeDefined();
    expect(value).toBe("Ridwan");
})
