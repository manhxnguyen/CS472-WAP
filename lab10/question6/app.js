const getName = require('./pattern2');

getName();

// The output is Error because we don't have pattern2.js
// Solution: change pattern2.js to pattern1.js
// After fixed, output: Josh Edward because we call the function getName from pattern1.js willexecutes the function exported by pattern1,js and it is module.exports = function (){ console.log('Josh Edward'); }