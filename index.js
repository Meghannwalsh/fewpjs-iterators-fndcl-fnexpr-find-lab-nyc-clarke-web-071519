const testVar = {}

function testFunc() {
  return "hi"
}


// function superbowlWin(array){
//   find(i = 0; i < array.length; i +=1){
//     superbowl = array[i]
    
//   }
// }

function superbowlWin(array) {
  const arr = array.find(function (win) {
   return win.result === "W"
  })
  if (arr){
    console.log(arr)
    return arr.year
  } else {
    return arr
  }

}



// roommates.find(function (s) { return s === "winston" })
