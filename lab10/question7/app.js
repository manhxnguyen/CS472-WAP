const { getFullname } = require('./pattern2');

getFullname();


// The output is Error because we don't have pattern2.js
// Solution: change pattern2.js to pattern1.js
// After fixed, output: Josh Edward because we get the function getFullname from pattern1.js