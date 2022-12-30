// Make polyfill for reduce method in JS

Array.prototype.myReducer = function (cb, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(this[i], i, this) : this[i];
    }
    return accumulator;
};

const arr = [2,3,4,5];
const sumOfArray = arr.myReducer((accu, curr, index, arr) => {
    return (accu += curr);
}, 0);
console.log("polyfill", sumOfArray);

// Output:
// polyfill 8