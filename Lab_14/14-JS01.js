
// Task 1
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}

console.log('Task 1');
console.log(upperCase('hello'));
console.log(upperCase('Hello')); 

// Task 2
function checkEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

console.log('Task 2');
console.log(checkEmail("alex@gmail.com")); 
console.log(checkEmail("alex-email@gmail"));

// Task 3
function findPattern(str) {
    const re = /d(b+)(d)/ig;
    return str.match(re);
}

console.log('Task 3');
console.log(findPattern("adbddbdbd"));
console.log(findPattern("abcdbBdbsbz")); 

// Task 4
function swapSubstrings(str) {
    return str.replace(/(\w+)\s+(\w+)/, '$2 $1');
}

console.log('Task 4');
console.log(swapSubstrings("Hello World"));
console.log(swapSubstrings("Good Morning")); 

// Task 5
function validateCardNumber(cardNumber) {
    const re = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return re.test(cardNumber);
}

console.log('Task 5');
console.log(validateCardNumber("0000-0000-0000-0000"));
console.log(validateCardNumber("0000111100001111"));

// Task 6
function checkEmailAdvanced(email) {
    const re = /^[a-zA-Z0-9]+([_\-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
    return re.test(email);
}

console.log('Task 6');
console.log(checkEmailAdvanced('alex_email@gmail.com'));
console.log(checkEmailAdvanced('alex_email@gmail'));

// Task 7
function checkLogin(login) {
    const re = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    const numbers = login.match(/\d+(\.\d+)?/g);
    return {
        isValid: re.test(login),
        numbers: numbers ? numbers.map(Number) : []
    };
}

console.log('Task 7');
console.log(checkLogin('user1234'));
console.log(checkLogin('u5ser2.5name3')); 
console.log(checkLogin('1invalidLogin')); 
