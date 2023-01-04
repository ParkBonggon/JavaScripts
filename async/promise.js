//Promise is a JavaScript object for asynhronous operation.

// State : pending -> fulfilled or rejected
// Producer vs Consumer

//1. Producer
//when new Promise is created, the excutor runs automatically
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('bonggon')
        reject(new Error('no network'))
    }, 2000);
});

//2. Consumers: then, catch, finally
promise //chaining
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => { //성공과 실패 상관없이 어떤 기능을 마지막으로 사용하고자 할때 finally
        console.log('finally');
    });


//3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => { //then은 값을 바로 전달하거나 promise를 전달해도 된다
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000)
        });
    })
    .then(num => console.log(num));

// 4. Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
/* // 한가지만 받아오는 경우 스킵 가능
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/