function getAdults(users) {
    var adults = [];
     //broken 

    for (var i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            adults.push(users[i].name);
        }
    }

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

var result = getAdults(users);


console.log(result);
console.log("Such a frustrsaating folly");
