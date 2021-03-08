const user = {
    email: "test@gmail.com",
    password: "1111"
}


const user2 = {}

for (let key in user) {
    user2[key] = user[key]
}

console.log(user2)