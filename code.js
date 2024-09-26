function fib(n) {
    let fibArr = new Array(n);

    for (let i = 0; i <= n; i++) {
        if (i == 0) { fibArr[0] = 0; }
        else if (i == 1) { fibArr[1] = 1; }
        else {
            fibArr[i] = fibArr[i-2] + fibArr[i-1];
        }
    }

    return fibArr;
}
