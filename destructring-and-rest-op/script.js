let notes = [
  { title: "science", content: "study about everything in the world" },
  {
    title: "computer-science",
    content: "study aboout computer and everything related to computers",
  },
  { title: "fitness", content: "chest day, push, bench press" },
  {
    title: "dell",
    content: "an major company that bulids computers and laptops",
  },
];

let [firstnode, secondnode, ...othernodes] = notes;

// console.log(firstnode);
// console.log(secondnode);
// console.log(othernodes);

let data = {
  name: "zain",
  age: 20,
  gender: "male",
  address: { city: "karachi", state: "sindh" },
};

let { name , age ,address: { city }} = data;

console.log(name, age, city);
