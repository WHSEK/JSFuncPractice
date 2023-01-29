function isFriendlyNum(num1, num2){
    let sum1 = SumDiv(num1);
    let sum2 = SumDiv(num2);

    if (sum1 == num2 && sum2 == num1){
        return true;
    } else{
        return false;
    }

}

function SumDiv (num){
    return Sum(Divisors(num));
}

function Divisors (num){
    let arr = [];
    for(let i = 1; i < num; i++){
        if (num % i == 0){
            arr.push(i)
        }
    }
    return arr;
}

function Sum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

function getFriendlyNum(fnum1, fnum2){
    let arr = [];

    for (let i = fnum1; i < fnum2; i++) {
        for (let j = i + 1; j < fnum2; j++) {
            if (isFriendlyNum(i, j)) {
                arr.push([i, j]);
            }
        }
    }
    return arr;
}
