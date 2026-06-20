// Closures + counter logic — Write a createCounter() function that returns increment, decrement, and getValue functions, all sharing private state via closure. This is literally how useState works under the hood conceptually, so getting comfortable with it now pays off.

function counter() {
  let counter = 0;

  return {
    increment: function () {
      return counter += 1
    },

    decrement: function () {
      return counter -= 1
    },

    getValue: function () {
      return counter
    },
  };
}

let newcount = counter()

console.log(newcount.increment())
console.log(newcount.increment())
console.log(newcount.increment())
console.log(newcount.increment())