//function =
//sub-program 프로그램 내에서 각각의 작은 단위의 기능 수행

//API = Application Programming Interface
//Function f: ,input,output, Function의 이름을 잘 정하는게 중요함

//Function
//-fundamental building block in the program
//-subprogram can be used multiple times
//-performs atask or calculates a value

//1. Function declaration
//function name(param1, param2) {body.... return;}
//함수의 이름 지정(파라미터 나열) {함수 안에 기본적인 비즈니스 로직 후 return;} 
//one function === one thing 하나의 함수는 한가지의 일만
//naming: doSometing, command, verb
//e.g. createCardAndPoint -> createCard, createPoint 세분화해 나눔
//function is object in JS

function printHellow() {
    console.log('Hello');
}
printHellow();

function log(meg) {
    console.log(meg);
}

log("Bonggon");
log(1234);

//2. Parameters
//Premitive parameters: passed by value
//메모리에 밸류가 그대로 저장되어 있어 밸류가 전달됨
//object parameters: passed by reference
//메모리에 ref가 저장되어 ref가 전달됨
function changeName(obj) {
    obj.name = 'bonggon';
}
const Parkbonggon = { name: 'Parkbonggon' };
changeName(Parkbonggon);
console.log(Parkbonggon);
//함수 안에서 obj의 값을 변경하게되면 그 변경된 사항이 그대로 메모리에 적용


//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


//4. Rest parameters (added in ES6)
function printALL(...args) {
    for (let i = 0; i < args.length; i++)
        console.log(args[i]);

    for (const arg of args) {
        console.log(arg);
    }
}
printALL('Park', 'Bonggon', 'Francheska')

//5. Local scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
//자식은 부모에서 정의된 값을 확인 가능하나
//자식에서 정의된 값을 부모는 확인하지 못함 .scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'bonggon';
    console.log(message); // local variable 지역변수, global 은 볼수있음
    //return undefined;
}
console.log(globalMessage);
printMessage();


//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

//Return 타입이 설정되지 않은 함수들은
//return undefined; 가 선언된것과 같다

//7.Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Funciton expression
//a function declaration can be called earlier than it is defiend. (hoisted) **
//a. function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('bonggon');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expresstion
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'Bonggon') {
        printYes();
    } else {
        printNo();
    }
}
//anonymous function 이름없는 함수
const printYes = function () {
    console.log('Yes !');
};
//named function 이름이 주어진 함수 print라 주어짐
//better debuggin in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('No !');
    // print(); 함수 안에 자신 스스로 또다른 함수를 호출 할 때
    // decursion(재귀함수)
};
randomQuiz('goni', printYes, printNo);
randomQuiz('Bonggon', printYes, printNo);


//Arrow function
//always anonymous
const simplePrint = function () {
    console.log('Bonggon');
}

const simplePrint2 = () => console.log('bonggon');
const add2 = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}

//IIFE: IMmediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

//Quiz time
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('Wrong command');
    }
}
console.log(calculate('substract', 5, 3));