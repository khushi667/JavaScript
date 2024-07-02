// nested destructring

const users = [
    {
        userId: 1,
        userName: "khushi",
        gender: "female"
    },
    {
        userId: 2,
        userName: "devanshi",
        gender: "female"
    },
    {
        userId: 3,
        userName: "aniketa",
        gender: "female"
    },
]

const [{userName,userId}, , {gender}] = users;
console.log(userId);
console.log(userName, gender);
