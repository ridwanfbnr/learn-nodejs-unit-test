
import { UserRepository } from "../src/user-repository.js";
import { UserService } from "../src/user-service.js";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {
    const person = {
        id: 1,
        name: "Ridwan"
    };

    service.save(person);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(person);
});

test("test mock class findById", () => {
    const person = {
        id: 1,
        name: "Ridwan"
    };

    repository.findById.mockReturnValueOnce(person);

    expect(service.findById(1)).toEqual(person);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
});

test("test mock class findAll", () => {
    const persons = [
        {
            id: 1,
            name: "Ridwan",
        },
        {
            id: 2,
            name: "Febnur",
        },
    ];

    repository.findAll.mockReturnValueOnce(persons);

    expect(service.findAll()).toEqual(persons);
    expect(repository.findAll).toHaveBeenCalled();
});
