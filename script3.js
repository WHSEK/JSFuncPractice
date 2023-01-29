function getDiv(num1, num2) {
    let arr1 = [];
    let arr2 = [];
    let comArr = [];
    let allArr = [];
    for (let i = 2; i < num1; i++) {
      if (num1 % i == 0) {
        arr1.push(i);
      }
    }
    for (let i = 2; i < num2; i++) {
        if (num2 % i == 0) {
          arr2.push(i);
        }
      }

    for (let elem of arr1) {
      if (inArray(elem, arr2)) {
        comArr.push(elem);
      }
    }

    return console.log(comArr);
}
  
  function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
  }