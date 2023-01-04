class UserStorage {
    loginUser(id, password) {
        return new Promise((resovle, reject) => {
            setTimeout(() => {
                if (
                    (id === 'bonggon' && password === 'human') ||
                    (id === 'rebecca' && password === 'gun')
                ) {
                    resovle(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resovle, reject) => {
            setTimeout(() => {
                if (user === 'bonggon') {
                    resovle({ name: 'bonggon', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }


//async로 변환
async getUserAndRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

//async 변환 출력
userStorage
    .getUserAndRole(id, password)
    .catch(console.log)
    .then(console.log);



