// reduce duplicate item from array

const arr = [1,2,3,4,1,2];
const b = [];
for(let i = 0; i<arr.length;i++){
    if(b.indexOf(arr[i]) == -1){
        b.push(arr[i])
    }
}
console.log("removed array value",b)
