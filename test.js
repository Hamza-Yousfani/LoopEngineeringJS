const getAdults = (users) => users
    .filter(user => user.age >= 18)
    .map(user => user.name);

const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 16 },
    { name: "Bob", age: 30 }
];

const result = getAdults(users);

console.log(result);
console.log("Such a frustrsaating folly");