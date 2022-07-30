
test("test string", () => {
    const name = "Ridwan Febnur";

    expect(name).toBe("Ridwan Febnur");
    expect(name).toMatch(/wan/);
    expect(name).toMatch(/Feb/);
})
