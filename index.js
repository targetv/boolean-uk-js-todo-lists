/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", users);

const newDatas = [];

for (const user of users) {
  const datas = [user.id, user.name, user.address.city];
  newDatas.push(datas);
}

console.log(newDatas);

alert(newDatas);

const userId = Number(prompt("What is your user id?"));
let message = `todo \n`;

for (const todo of todos) {
  let completedMessage = "Not Completed";
  if (todo.completed) {
    completedMessage = "Completed";
  }
  if (userId === todo.userId) {
    message += ` \n title: ${todo.title}\n 
    completed: ${completedMessage} \n`;
  }
}

alert(message);

// console.log("todos: ", todos);

// const userData = [
//   {
//     name: "Sean",
//     city: "Durham",
//     gender: "Male",
//   },
//   {
//     name: "Kim",
//     city: "Durham",
//     gender: "Female",
//   },
//   {
//     name: "Karen",
//     city: "Durham",
//     gender: "Female",
//   },
//   {
//     name: "Stuart",
//     city: "Durham",
//     gender: "Male",
//   },
// ];

// const newDatas = [];

// for (const data of userData) {
//   const newData = [data.name, data.city];
//   newDatas.push(newData);
// }

// console.log(newDatas);
