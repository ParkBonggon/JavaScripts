//Objects
//one of the javaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of object
// object = { key : value };


//1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const ojb2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const bonggon = { name: 'bonggon', age: 20 }; //class 없이 괄호를 통해 바로 ojbect 생성 가능
print(bonggon);

bonggon.hasjob = true; //dynamically typed language, 동적 타입 Runtime때 결정되는 JS 특성상 뒤늦게 property 추가
//can add properties later
console.log(bonggon.hasjob);

delete bonggon.hasjob; // can delete properties later
console.log(bonggon.hasjob);

// 2. Computed properties
//key should be always string
// object['key']
console.log(bonggon.name); //코딩하는 순간 그 key에 해당하는 값을 받고싶을 때
console.log(bonggon['name']); //string, 정확하게 어떤 key가 필요한지 모를 때, runtime시 결정될 때 사용됨
bonggon['hasjob'] = true;
console.log(bonggon.hasjob);

function printvalue(obj, key) {
    console.log(obj[key]); //나중에 동적으로 key 관련된 value를 받아올때 유용하게 사용 가능
}
printvalue(bonggon, 'name');
printvalue(bonggon, 'age');

//3. Property value shorthand
const person1 = { name: 'bonggon', age: 21 };
const person2 = { name: 'main', age: 20 };
const person3 = { name: 'devid', age: 25 };
const person4 = new Person('rebecca', 29); //함수를 이용해 값만 전달해 줄일 수 있음
console.log(person4);


// 4. constructor function
function Person(name, age) {
    // this = {}; 생략
    this.name = name;
    this.age = age;
    // return this; 생략
    /*function Person(name, age) {
        return {
            // name, //name: name, key 와 value의 이름이 동일하다면 줄여줄 수 있음
            // age,  //age: age,
        };
        }*/
}

// 5.in operator: property existence check (key in obj)
//해당하는 obj안에 key 가 존재하는지 확인하는 것
console.log('name' in bonggon);
console.log('age' in bonggon);
console.log('random' in bonggon); // false
console.log(bonggon.random); // undefind

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in bonggon) { //in 사용 시 bonggon이 가지고 있는 key 들이 block을 돌때마다 key라는 지역변수에 할당됨
    console.log(key);
}
//모든 키들을 받아와서 처리하고 싶을 때 사용

//for(value of iterable)
//배열과 같은 배열 list, 순차적 할당
const array = [1,2,3,4,5];
for(value of array) {
    console.log(value);
}

//7. Cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'bonggon', age: '20'};
const user2 = user;
user2.name = 'devid';
console.log(user);

//old way
const user3 = {}; // 빈 object 생성
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);  // or, const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 나오는 Ojbect 일수록 앞에 동일한 프로퍼티가 있다면 값을 계속 덮어 씌움
console.log(mixed.color);
console.log(mix.size);
