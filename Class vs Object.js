//class 조금 더 연관 있는 데이터를 한데 묶어 놓는 컨테이너 같은 역할
class Class{
    name; //field(속성)
    speak(){} //method(행동)
}

//class = fields(변수)와 methods(함수) 가 종합적으로 묶여있는 것
//method없이 date(fields)만 들어있을 경우 data class라고 말함
//내부적으로 보여지는 변수와 밖에서 보여질 수 있는 변수들을 나누어서
//in capsulation(캡슐화)라고 함

//class 를 이용해 상속과 다양성이 일어날 수 있는데
//이 모든 것을 객체지향이라고 한다.


//------------
//class
//-template
//-declare once
//-no data in

//object
//-instance of a class
//-created many times
//-data in

//Object-oriendted programming
//class : templat
//object: instance of a class
//JavaScript classes
// - introduced in ES6
//- syntactical sugar over prototype-base inheritance


// 1. Class declartations(클래스 선언)
class Person{
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    talk() {
        console.log(`${this.name}: hello!`)
    }
}

const bonggon = new Person('Bonggon', 20);
console.log(bonggon.name);
console.log(bonggon.age);
bonggon.talk();

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //main
    }

    get age(){
       
        // main의 this.age가 메모리에 올라가 있는 data를 읽어오는게 아닌
        //getter 를 호출하게 된다
        return this._age;
    }

    set age(value){
        //setter를 정의하는 순간
        //main의 =age; 를 호출할 때 메모리의 값을 할당하는게 아닌
        //setter를 호출하게 됨

        //setter 안에서 전달된 value를 this.age에 할당 할 때
        //메모리의 값을 업데이트하는 게 아닌 setter를 호출하게 됨 
        //이를 무한정 반복하기에 call stack size exceeded error가 나게됨
        
        /*if (value < 0){
            throw Error('age can not be negative');
        }*/

        this._age = value < 0 ? 0 : value; //this.age를 this._age로 변경
    }
}

const user1 = new User('Bonggon', 'Job', -1);
console.log(user1.age);


//3. Fields (public, private)
//Too soon!
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class experimnet{
    publicField = 2;
    #privateField = 0;
}
const private = new experimnet();
console.log(private.publicField);
console.log(private.privateField);

//4. Static properties and methods
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const Article1 = new Article(1);
const Article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


//5. Inheritance
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}
// extends 를 통한 class 확장
class Rectangle extends Shape {}
class Triangle extends Shape {
    //overiding을 통한 함수들만 수정
    draw() {
        super.draw(); //super. 부모의 class에서 해당 함수 호출
        console.log(`Triangle`); //공통적인 함수를 수정하는 것이기에
                                // super를 통해 추가로 함수를 호출해야함
    }

    getArea() {
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
//왼쪽에 있는 Object가 오른쪽에 있는 class의 인스턴스인지
//object가 class를 이용해 만들어진 것인지 확인하는 것
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true, JS에서 만든 모든 Object class들은
                                            //JS에 있는 object를 상속한 것

