const {readFileSync, writeFileSync} = require('fs');
console.log('Starting the task');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', 
    `Here is the result ${first}, ${second}`, {flag: 'a'}
)
console.log('Done with task');
console.log('starting next task')