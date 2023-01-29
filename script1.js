/*function sum(arr){
    let s = 0;
    for (i = 0; i < arr.length; i++){
       s += arr[i]
    }
    return console.log(s)
}
*/

/*function divider(num){
    let arrDivider = []
    let interDivider = 1;
    do {
        if(num % interDivider == 0){
            arrDivider.push(interDivider);
        }
        interDivider++;
    }
    while (interDivider <= num / 2);
    arrDivider.push(num);

    return console.log(arrDivider)
}
*/

/*function getLetters(text) {

    const Letters = [];

    for (let key of text) {

        Letters.push(key);

    }

    return console.log(Letters)

};
*/ 

/*function getLetters(text) {

    const Letters = [];

    for (let key of text) {

        Letters.push(key);
        
    }
    Letters.reverse();
    return console.log(Letters)

};
*/

/*function getLetters(text) {

    const Letters = [];

    for (let key of text) {

        Letters.push(key);

    }
    Letters[0] = Letters[0].toUpperCase();
    return console.log(Letters)

};
*/

/*function UPLetters(word)
{
  let Word = word.split(' ');
  let Letters = [];
    
  for(let x = 0; x < Word.length; x++){
      Letters.push(Word[x].charAt(0).toUpperCase()+Word[x].slice(1));
  }
  return console.log(Letters.join(' '));
}
*/

/*function fillArr(num) {

    const Numbers = [];

    for (let i = 1; i <= num;) {

        Numbers.push(i++);

    }

    return console.log(Numbers)

};
*/

/*function RndNum(num) {

    let Numbers = [];
    

    for (let i = 1; i <= num;) {

        Numbers.push(i++);

    }
    var RndN = Numbers[Math.floor(Math.random()*Numbers.length)];
    console.log(Numbers)
    return console.log(RndN);
};
*/

/*function simNumber(num) {
    isSim = true
    for (i = 2; i <= num/2; i++) {
        if (num % i == 0) {
            isSim = false
            break
        }
    }
    return console.log(isSim)
}
*/

/*function perfectNum(num){
    let arrDivider = []
    let interDivider = 1;
    let s = 0;
    do {
        if(num % interDivider == 0){
            arrDivider.push(interDivider);
        }
        interDivider++;
    }
    while (interDivider <= num / 2);
    

    for(i = 0; i < arrDivider.length; i++){
        s += arrDivider[i]
    }

    console.log(arrDivider)
    console.log(s)

    if(s == num){
        return true;
    }else{
        return false;
    }
}
*/