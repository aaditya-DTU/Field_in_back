// Async code

// Javascript is.....synchronous.....single threaded....By default

// execution context....execute one line of code at a time
// each operation waits for the last one to complete before executing

// Blocking code........ block the flow of program....read file sync
// Non Blocking code.....does not block execution.....read file async

// Js engine.......memory Heap + Call Stack
// call stack calls--------> Web API
// where DOM API, Set timout, Set interval, fetch...etc is present
// In web API (in brower).....Register call back.....call back to task queue and then task queue add to calls to call stack
// In web API.....Fetch promise and contain high prority call backs then put it in call stack
// It is a cycle

// DOM API is present in Brower , not in Node 