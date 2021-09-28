let user = {
  name: "john",
  age:23,
};

let admin = {};

// shallow copy
for (let key in user) {
  admin[key] = user[key];
}

admin.name = "park";

console.log(admin.name); // output : "park"
console.log(user.name); // output : "john"

user.age = 30;
console.log(user.age);
console.log(admin.age); // 27->30