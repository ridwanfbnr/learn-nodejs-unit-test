
export const sum = (first, second) => {
    return first + second;
};

export const sumAll = (numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
};

export const calculated = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    callback(total);
};

export const calculateAndReturn = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return callback(total);
};
