// Question 1
function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 20) {
            total += arr[i];
        }
    }
    return total;
}
const arr1 = [10, 20, 30, 40, 50];
console.log(sum(arr1)); // Output: 120

// Question 2
const getNewArray = function(arr) {
    return arr.filter(str => str.length >= 5 && str.includes('a'));
}
const arr2 = ['apple', 'banana', 'cat', 'dog', 'chicken', 'pig', 'cow'];
console.log(getNewArray(arr2)); // Output: [ 'apple', 'banana']

// Question 3
const concat = (str, arr1, arr2) => [...str.split(''), ...arr1, ...arr2];
console.log(concat('hi', [1,2,3], ['Hello','world'])); // Output: ['h', 'i', 1,2,3, 'Hello','world']

// Question 4
const computeAverageGrade = (students) => {
    return students.reduce((acc, student) => {
        if (student.courses.includes('cs303')) {
            const average = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
            acc[student.name] = average;
        }
        return acc;
    }, {});
}

const students = [
  { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
  { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
  { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
  { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
  { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
];

console.log(computeAverageGrade(students)); // Output: { Quincy: 93.5, Sam: 86.5, Katie: 71.5 }