const getName = require('./pattern1');

getName();

// Output is Error because in pattern1.js we exports an object with a property getName that is a function.
// So if want to run getName we can do it like this:
// getName.getName();
// or return module like this:
// module.exports = {
//     getName: function() {
//         console.log('Function from pattern1.js');
//     },
// };