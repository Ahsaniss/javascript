/*function  sallery(x) {
    for( let x=1; x> 100;x++){
        let sall= x*1200;
        return sall;
    }
console.log(sallery(4));
}*/
function sallery(x) {
    let basic_pay = 1300;
    let sall = x * basic_pay;
    return sall;
}

console.log(sallery(5)); // This will log 6500 (5 * 1300)
function sallery() {
    let salaries = [];
    let basic_pay = 1300;

    for (let x = 0; x < 3000; x++) {
        let sall = x * basic_pay;
        salaries.push(sall);
    }

    return salaries;
}

console.log(sallery()); // This will log an array of salaries
