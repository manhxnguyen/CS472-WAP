console.log('start');

setTimeout(() => console.log('timeout 1'), 0);

setTimeout(() => {

    console.log('timeout 2')

    process.nextTick(() => console.log('nextTick 3'));

}, 0);

setTimeout(() => console.log('timeout 3'), 0);

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

process.nextTick(() =>  console.log('nextTick 1'));

process.nextTick(() =>  console.log('nextTick 2'));

console.log('end');

// Output is:
// start
// end
// nextTick 1
// nextTick 2
// Promise...1
// Promise...2
// timeout 1
// timeout 2
// nextTick 3
// timeout 3

// Following priority order of queue:
// Immediate Logging: The console.log('start'); and console.log('end'); are executed immediately, in the order they appear, because they are not inside any asynchronous callback. 
// This results in "start" and "end" being the first and second lines of output, respectively.

// Process.nextTick(): Calls to process.nextTick() schedule callbacks to execute immediately after the current operation completes, even before any other I/O events (including timers) are processed. 
// This means nextTick 1 and nextTick 2 are logged right after "end", before any of the promise callbacks or timeouts.

// Promises: The promise callbacks are placed in the microtask queue, which is processed after the current script has finished (which includes the nextTick queue) and before moving on to other tasks like I/O or timers. 
// Since both promises are resolved immediately, Promise...1 and Promise...2 are logged next, in the order they were defined.

// The setTimeout callbacks are considered macrotasks and will be executed after all microtasks have completed. Since all three setTimeout calls have the same delay (0 ms), they are queued in the order they were defined.
// Therefore, timeout 1, timeout 2, and timeout 3 are logged in that sequence. However, it's important to note that within the callback of timeout 2, there's a process.nextTick() call. This schedules nextTick 3 to be executed immediately after the current phase of the event loop completes and before moving to the next phase, which means it's logged right after timeout 2 but before timeout 3