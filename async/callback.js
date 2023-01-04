//JavaScript is synchoronous.
//Execute the code block in order after hoisting.
// hoisting: var, function declaration


// synchoronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); //동기
// Asynchronous callback
function printWithDelay(print, setTimeout) {
    setTimeout(print, timeout);
}

console.log('1'); //동기
setTimeout(() => console.log('2'), 1000); //비동기
console.log('3'); //동기
printWithDelay(()=> console.log('async callback'), 2000); //비동기
