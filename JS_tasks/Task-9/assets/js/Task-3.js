let fac = (num) => {
    let result =1;

    for (let a =1;a<=num;a++){
        result *= a;
    }
    return result
}
console.log(fac(7));
