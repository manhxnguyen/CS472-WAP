const result = function (exports, module) {
    exports = module.exports;

    exports.firstname = "John";

    module.exports.lastname = "Smith";

    exports = {
        getFullName: function () {
            console.log("John Smith");
        },
    };

    return module.exports;
}.apply(null, [null, { exports: {} }]);

console.log(result);

// apply(null, [null, {exports: {}}]) -> calls the function with null as the context and null and {exports: {}} as arguments -> module is {exports: {}} and exports is null
// exports = module.exports; -> exports is {}
// exports.firstname = 'John'; and exports = {getFullName: function(){console.log('John Smith')}}; -> reassigns exports to {getFullName: function(){console.log('John Smith')}}
// it also sets the firstname property to 'John' on  module.exports -> module.exports = {firstname: 'John'}
// module.exports.lastname = 'Smith'; -> adds a lastname property to the same object so module.exports = {firstname: 'John', lastname: 'Smith'}
// return module.exports; -> returns the object {firstname: 'John', lastname: 'Smith'}, we only care about last return value
