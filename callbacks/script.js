function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(name, callback) {
  let a = callback(name);
  console.log(a);
}

processUser("zain", greet);

function onSuccess(data) {
  console.log("Got it:", data);
}

function fetchData(callback) {
  // pretend this takes time, like an API call
  let data = "user profile";
  return callback(data)
  // ???
}

fetchData(onSuccess);