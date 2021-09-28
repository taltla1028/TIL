let user = {
  name: "john",
  age: 27,
};

console.log(typeof user); // object
console.log(typeof user.name); // string
console.log(typeof user.age);// number

console.log(user); // { name: 'john', age: 27 }
console.log(user.name); // john
console.log(user.age);// 27

user.age = 30;

console.log(user.age)// 30

let user2 = {
  name: "YeonWoo",
  age: 25,
}

console.log(user2);

user2.weight= 65;
console.log(user2);

delete user2.age;
console.log(user2);

// 객체복사 문제점
let admin = user;
console.log(admin);

admin.name = "park";
console.log(admin.name);
console.log(user.name); // john -> park

user.age = 30;
console.log(user.age);
console.log(admin.age); // 27 -> 30