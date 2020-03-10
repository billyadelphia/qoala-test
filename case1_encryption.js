const romanMap = new Map();
romanMap.set('I', 1);
romanMap.set('V', 5);
romanMap.set('X', 10);
romanMap.set('L', 50);
romanMap.set('C', 100);
romanMap.set('D', 500);
romanMap.set('M', 1000);

function romanToNumber(roman) {
    var result = 0;
    if (roman) {
        romanAsArray = roman.split('');
        romanAsArray.forEach(function(e, i) {
            result += romanMap.get(e) < romanMap.get(romanAsArray[i + 1]) ? -romanMap.get(e) : romanMap.get(e);
        });
    }
    return result;
}

let input = null;

process.argv.forEach(function(arg, index) {
    if (arg === "--input") {
        input = process.argv[index + 1];
    }
});

if (input) {
    console.log("input", input);
    console.log("output", romanToNumber(input));
} else {
    console.error("Param (--input) required");
}