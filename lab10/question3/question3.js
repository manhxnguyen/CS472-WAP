const fs = require('fs');


fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));

// () => { console.log('readFile....'); } is called after the file is read.
// setTimeout(() => console.log('timeout'), 0); is called after 0 milliseconds -> or asap
// setImmediate(() => console.log('Immediate')); is called after the I/O event is completed.
// Output is timeout, readFile...., Immediate because timeout is called first, then readFile, then setImmediate (assuming the I/O event is completed after the timeout event is called)
