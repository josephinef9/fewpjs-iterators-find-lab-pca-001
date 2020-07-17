const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const superbowl = array.find(element => element.result === "W")
  return superbowl ? superbowl.year : undefined
}