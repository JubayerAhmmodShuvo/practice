const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

if (first == second) {
    console.log('object are equal');
} else {
    console.log('object are not equal');
}

if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('object are equal');
}