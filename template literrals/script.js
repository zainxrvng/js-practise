const name = "zain"
const age = 20

let greeting = `hello ${name} congrats on your birthday today you have turned ${age} years old`

console.log(greeting);

const formatDate = (timestamp) => {
  const date = new Date(timestamp)

  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
}

const notes = {
  title : "discuss project",
  timestamp: Date.now()
}

console.log(`last Edited: ${formatDate(notes.timestamp)}`);
