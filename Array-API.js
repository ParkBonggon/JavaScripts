// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  const result = fruits.join(', and '); //Array에 있는 모든 elements 을 더해 String으로 return 시키며 ( 구분자 )를 넣어거나 넣지 않아도 된다.
  console.log(result);

  //my answer
  const fruit = fruits.toString();
  console.log(fruit);
}
console.log(`=====2=====`);
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // split : separator(구분자)와 limit을 받아와 string으로 나타냄
  //limit을 통해 return받을 배열 size를 지정가능하며 지정하지 않아도 되지만
  //separator는 적용시켜야줘야 한다, 하지않으면 문자열 전체가 한 배열에 다 들어가기 때문
  console.log(result);
}
console.log(`=====3=====`);
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  //my answer
  const result = array.reverse(); //Array 내 item 의 순서를 거꾸로 만든 후 순서가 변환된 Array를 return 값으로 반환한다.
  console.log(result);
  console.log(array); //array 자체 순서를 바꾸므로 유념하며 써야한다.

}
console.log(`=====4=====`);
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  //my answer
  /*
  const result = array.splice(0,2); // 새 Array를 만들어야 하기 때문에 기존 Array를 수정하는 방식은
  console.log(array);
  console.log(result);
  */

  const result = array.slice(2, 5); // Array에서 원하는 부분만 return해서 받아 쓰고 싶을 때 사용
  //end는 exclusive 하기 때문에 마지막은 제외 됨으로 index를 5까지 선언해줌
  console.log(array);
  console.log(result);

}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
console.log(`=====5=====`);
// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
  //배열 내 첫번째로 찾아진 element를 return한다
  //이 element는 predicate 가 true 가 되면 찾아 진 element를 return 시킴
  //찾지 못하면 undefined를 return 시킴
  //predicate callback 함수는 배열에 있는 모든 요소들 마다 호출이 되며
  //호출되어진 callback 함수가 true가 되면 함수를 멈추고 true가 된 요소를 return시킴 
}
console.log(`=====6=====`);
// Q6. make an array of enrolled students
{
  const answer = students.filter((student) => student.enrolled === true);
  console.log(answer);

  //my answer
  const result = students.filter(students => students.enrolled === true);
  console.log(result);
}
console.log(`=====7=====`);
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  //my answer
  const result = students.map((student) => student.score) //callback 함수로 전달되는 인자는 최대한 이해하기 쉽게 쓰는 것이 좋다
  console.log(result);
}
console.log(`=====8=====`);
// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); // 배열에서 1개의 요소라도 조건값 충족 확인 시 사용

  const result2 = !students.every((student) => student.score >= 50); //배열 모든 요소에 대해에 조건값 충족 확인 시 사용
  console.log(result2);
}
console.log(`=====9=====`);
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  //모든 배열을 돌면서 값을 누적 시킴, prev는 콜백함수에서 리턴된 값이 전달됨 curr는 배열의 item을 순차적으로 전달됨
  /*
  {
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0); */
  console.log(result / students.length);
}
console.log(`=====10=====`);
// Q10. make a string containing over 50 scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score)
  .filter((score) => score >= 50) //API들을 붙여서 실행 가능
  .join();
  console.log(result);
}
console.log(`=====Bonus=====`);
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a,b) => a - b)
  .join();
  console.log(result);
}