const user = {
	name: 'Heropy',
	age: 85,
	emails: ['ian0719@naver.com']
}

// const copyUser = user
// console.log(copyUser === user)

// user.age = 22;
// console.log('user', user)
// console.log('copyUser', copyUser);

console.log('-----')
console.log('-----')

const copyUser = {...user}
console.log(copyUser === user)

console.log(user.name)