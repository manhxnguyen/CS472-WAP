var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage(); 

// Output is undefined because this is not defined in the global scope. It is defined in the function scope.
// Solution is wrapped in an object and then called.
// logMessage.bind({message: 'Hello World'})();