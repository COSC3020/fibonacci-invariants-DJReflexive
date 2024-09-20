function fib(n) {
    let fibArr = new Array(n);

    for (n; n >= 0; n--) {
        fibArr[n] = fibCalc(n);
    }

    return fibArr;
}

function fibCalc(n) {
    if (n == 0) { return 0; }
    if (n == 1) { return 1; }

    return fibCalc(n-2) + fibCalc(n-1)
}