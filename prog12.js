// Make polyfill for filter method in JS

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(cb(this[i]));
  }
  return temp;
};

const arr = [2, 3, 4, 5];
console.log("arr", arr);

const data = arr.filter((num) => {
    return num > 4;
});
console.log("resultnumber", data);

// Output:
// arr [ 2, 3, 4, 5 ]
// resultnumber [ 5 ]