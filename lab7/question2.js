let i = 0;

setTimeout(() => console.log(i), 100);

// assume that the time to execute this function is >100ms

for(let j = 0; j < 100000000; j++) {

  i++;

}

// The scheduled function will run after the loop. 
// This is because JavaScript is single-threaded, and the event loop won't process the next event until the current execution is complete.

// The console.log will show 100000000 after the loop. 
// Because setTimeout does not pause the execution of the code, it schedules the function to be run in the future. 
// When the setTimeout function is executed, the loop has already finished, so i has already reached its final value.