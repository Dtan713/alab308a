let counter = 0;

function incrementCounter() {
    counter++;
    console.log(counter)
    incrementCounter()

}

try {
    incrementCounter()
    
} catch (error) {
    console.log(error,counter)
    
}


const array = [1, 2, [3, 4], 5, [6, 7]];

let newArr = [];

function flatten(index, arr) {
    if (index >= arr.length) return newArr;

    if (array.isArray(arr[index])) {
        flatten(0, arr[index]);
    } else {
        newArr.push(arr[index]);
    }

    return () => flatten(index + 1, arr);
}

const flattenedArray = flatten(0, myArr, []);
console.log(flattenedArray);
const trampoline = (f, ...args) => {
    let result = f(...arg);
    while (typeof result === "function") {
        result = result();
    }
}
