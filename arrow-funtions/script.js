// function getarea(width, height) {
//   return width * height
// } normal function

 const getarea = (width, height) => width * height
  
 const data = [1,2,3,4,5,5,6,7,8,9]

 const doublenumber = data.map((number) => {
  return number * 2
 })

console.log(doublenumber);

console.log(getarea(2,5))