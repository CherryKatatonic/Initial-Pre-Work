// Already known

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        var con = contacts[i];

        if (con.firstName == name) {
            if (con.hasOwnProperty(prop)) {
                return con[prop];
            } else {
                return 'No such property';
            }
        }
    }

    return 'No such contact';
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Harry", "likes");
