// Bubble sort algorithm
function sort(array) {
    //setting a variable whetter it's done or not
    let done = false;
    // looping until the variable is done
    while (!done) {
        // variable is done
        done = true;
        // looping from 1 to length of the array
        for (let i = 1; i < array.length; i += 1) {
            // checking if the value in array minus one is greater than the value in the array
            if (array[i - 1] > array[i]) {
                done = false;
                //mapping array position, keep loop this function until the array is sorted
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

let numbers = [10, 2, 1, 5, 3, 6];
console.log("input : ", numbers);
console.log("output : ", sort(numbers));
console.log("explanation :", "please read comments in the code");