process.argv.forEach(function(arg, index) {
    if (arg === "--input") {
        input = process.argv[index + 1];
    }
});



let max = input;
let min = 1;
let trees = {};
let last = min;
let isUsed = [];
let lastPoint = null;
let parentNumber = {};
for (let i = min; i <= max; i++) {
    trees[i] = {};
    if (i > last) {
        for (const tree in trees) {
            if (trees[tree] && !trees[tree].right && !isUsed.includes(i)) {
                trees[tree].right = i;
                last = i;
                isUsed.push(i);
            }

            if (trees[tree] && !trees[tree].left && !isUsed.includes(i)) {
                trees[tree].left = i;
                last = i;
                isUsed.push(i);
            }

            if (trees[tree] && (trees[tree].right || trees[tree].left)) {
                parentNumber[i] = tree;
                lastPoint = tree;
            }


        }

    }
}

let count = checkNodeNumber(max);
if (input) {
    console.log("input", input);
    console.log("output", count);
} else {
    console.error("Param (--input) required");
}

function checkNodeNumber(index) {
    if (parentNumber[index]) {
        return (index * 1) + checkNodeNumber(parentNumber[index]);
    }
    return (index * 1);
}