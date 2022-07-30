
test("test toBe", () => {
    const name = "Ridwan";
    const result = `Hello ${name}`;

    expect(result).toBe("Hello Ridwan");
});

test("test toEqual", () => {
    const person = { id: 123 };
    Object.assign(person, { name: "Ridwan" });
    
    expect(person).toEqual({id: 123, name: "Ridwan"});
})
