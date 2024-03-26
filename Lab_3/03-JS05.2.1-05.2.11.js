//5.2.1)
function getProperty(object, key) {
  if (object) {
    return object[key];
  }
}
var object = {
  key: 'value'
};
var output = getProperty(object, 'key');
console.log(output);

//5.2.2)
function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);

//5.2.3)
var obj = {
  name: 'Sam',
  age: 20
}

function removeProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}
removeProperty(obj, "name");
console.log(obj)

//5.2.4)
function getFullname(name, surname) {
  return name + ' ' + surname;
}
console.log(getFullname('Joe', 'Smith'));

//5.2.5)
function getLengthOfWord(word) {
  return word.length;
}
var output = getLengthOfWord('word');
console.log(output);

//5.2.6)
function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}
var output = getLengthOfTwoWords('word1', 'word2');
console.log(output);

//5.2.7)
function isGreaterThan(num1, num2) {
  return num2 > num1;
}
var output = isGreaterThan(11, 10);
console.log(output);

//5.2.8)
function isEven(num) {
  return num % 2 === 0 ? true : false;
}
var output1 = isEven(12);
console.log(output1);

//5.2.9)
function isSameLength(word1, word2) {
  return word1.length == word2.length;
}
var output = isSameLength('mama', 'tato');
console.log(output);

//5.2.10)
function isEvenAndGreaterThanTen(num) {
  return num >= 10 && num % 2 == 0;
}
var output = isEvenAndGreaterThanTen(10);
console.log(output);

//5.2.11) 
function computeAreaOfATriangle(base, height) {
  return (base * height) / 2
}
var output = computeAreaOfATriangle(4, 6);
console.log(output);