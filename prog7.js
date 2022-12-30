// Multiply two number without using multiply sign in JS

function multi(a, b){
    let answer = a;
    for (let i = 0; i < b-1; i++) {
        answer += a;
    }
    return answer;
}
console.log(multi(5, 3));