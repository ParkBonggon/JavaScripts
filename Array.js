//자료구조
//비슷한 종류의 data들을 묶어서 한 곳에 보관하는 것

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //Index를 전달하게 되면 그 Index에 대항되는 key 값을 얻어옴
console.log(fruits[fruits.length - 1]);//총 길이에 -1 하면 마지막 배열을 받아오게 됨

//3. Looping over an array
//print all fruits

//a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit)); 
//forEach는 배열 안에 들어있는 value 들 마다 내가 전달한 함수를 출력한다.

//4. Addtion, deletion, copy
//push : add an item to the end
fruits.push('mango', 'pineapple');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('mango', 'lemon');
console.log(fruits);

//shift: remove an item from the beigging
fruits.shift();
fruits.shift();
console.log(fruits);

//shift, unshift are slower than pop, push
//배열이 길어질 수록 shift(옮기는) 작업이 길어질 수 있기 때문에
//pop과 push를 이용하는게 좋다
//배열 맨 마지막에서 item에 접근하는 것과 중간에 data를 넣고 빼는 것도 index를 이용하기 때문에 빠르다
//하지만 무언가 배열 전체의 data들이 shift되는 operation들은 더 느릴 수 밖에 없다.
//배열이 길면 길수록 전체적으로 움직여야되는 것들이 늘어나기 때문이다.

//splice: remove an item by index position
fruits.push('manggo', 'lemon', 'pineapple');
console.log(fruits);
fruits.splice(1,1); //원하는 index만 지정하고 몇개나 지울지 설정하지 않으면 지정 index부터 모든 data를 지운다.
console.log(fruits);
fruits.splice(1,0,'watermelon','cherry'); //원하는 index에서 data를 추가 시킬수 도 있다.
console.log(fruits);


//combine two arrays
const fruits2 = ['coconut','mikan'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Search
//indexOf: find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('lemon'));

//includes: Array 내 존재 유무
console.log(fruits.includes('egg'));
console.log(fruits.includes('pineapple'));
console.log(fruits.indexOf('egg'));

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); // 같은 data인 경우 제일 첫번째로 해당하는 index 를 return함
console.log(fruits.lastIndexOf('apple')); // 가장 마지막에 해당하는 index 를 return함



