function palindrome(number) {
    let data, temp, final = 0;
    temp = number;
    while (number > 0) {
        data = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + data;
    }
    return final === temp;
}

let input1 = [808, 809, 111, 102];
let input2 = [908, 809, 122, 102];

let test1 = 0;
for (const number of input1) {
    if (palindrome(number)) {
        test1++;
    }
}

let test2 = 0;
for (const number2 of input2) {
    if (palindrome(number2)) {
        test2++;
    }
}

console.log("input case 1 :", input1);
console.log("output case 1 :", test1);
if (test1) {
    console.log("explanation case 1 :", `Consist of ${test1} integer palindrome`);
} else {
    console.log("explanation case 1 :", `There is no integer palindrome;`);
}

console.log("input case 2 :", input2);
console.log("output case 2 :", test2);
if (test2) {
    console.log("explanation case 1 :", `Consist of ${test2} integer palindrome`);
} else {
    console.log("explanation case 1 :", `There is no integer palindrome;`);
}