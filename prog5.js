// return resolve if value is less than 5 using promise

function fun(a){
    let myPromise = new Promise((myResolve, myReject) => {
        let x = 0;

        if(a<7){
            myResolve(`number is given ${a}`);
        } else {
            myReject("Error");
        }
    });

    myPromise.then((result) => {
        console.log(result)
    })
}
fun(5);