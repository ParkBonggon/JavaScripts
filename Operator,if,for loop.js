// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 8. Conditional operators: if
// if, else if, else
const name = 'bonggon';
if (name === 'bonggon') {
    console.log('Welcome, Bonggon!');
} else if (name === 'gamer') {
    console.log('You are amazing gamer');
} else {
    console.log('unknown');
}

// 9.Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'bonggon' ? 'yes ' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log(`this's IE`);
        break;
    case 'Chorome':
        console.log('love you!');
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log(`I don't know`);
        break;
}

//11. Loops
//while loop, while the condition is turthy,
//body code is executed.
let i = 5;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
//block 먼저 실행하고자하면 do,while , 조건문이 맞을떄만 block 실행을 하려하면 while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (let i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

// nested loops
//cpu에 좋지 않음
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
for(let i = 0; i <11; i++){
   if (i % 2 !==0) {
    continue;
   }
   console.log(`q1. ${i}`);
}

for(let i = 0; i <11; i++){
    if ( i === 8) {
     break;
    }
    console.log(`q2. ${i}`);
 }

 //loop lable

 


