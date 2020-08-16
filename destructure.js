// const person = {
//     name: "Arman Hossain Somoy ",
//     age: 20,
//     class: "Honers second Year",
//     job: "jobless"
// };
// const {name, age} = person;
// console.log(name, age);

const names = ['Sakib', 'rakib', 'fahim']

const [firstFriend, ...restFriends] = names;
console.log(restFriends);