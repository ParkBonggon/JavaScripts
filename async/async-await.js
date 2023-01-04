//async & await
//clear style of using promise
//syntactic sugar

//1. async
async function fetchUser() { //async 사용 시 코드블록이 자동으로 Promise로 변경된다
    //do network request in 10 secs...
    return 'bonggon';
};

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'Apple';
}

async function getBanana() {
    await delay(1000);
    return 'Banana';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


//3. useful Promise APIs
function pickALLFruits() {
    //Promise.all : Promise 배열을 전달하게 되면 모든 Promise들이 병렬적으로 받을때까지 모아줌
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
        );
}
pickALLFruits().then(console.log);


function pickOnlyOne() {
    //Promise.race : 배열에 전달된 Promise 중 가장 먼저 값을 return한 것만 전달됨
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);