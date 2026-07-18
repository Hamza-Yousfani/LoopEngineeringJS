function getAdults(users) {
    var adults = [];

    for (var i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            adults.push(users[i].name);
        }
    }
sdfsdfsf
    return adults;
}

var users = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Alice",
        age: 16
    },
    {
        name: "Bob",
        age: 30
    }
];
//nlah nbblah blaudsj
var result = getAdults(users);

console.log(result);
