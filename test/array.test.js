
test("arayy simple", () => {
    const names = ["Ridwan", "Ryan", "Raka"];

    expect(names).toEqual(["Ridwan", "Ryan", "Raka"]);
    expect(names).toContain("Ridwan");
});

test("arayy object", () => {
    const person = [
        { name: "Ridwan" },
        { name: "Ryan" },
        { name: "Raka" }
    ];

    expect(person).toContainEqual({ name: "Ryan" });
});
