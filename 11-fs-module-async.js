const {readFile, writeFile} = require('fs');
console.log('Starting the task...');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return err;
    }
    const first = result;

    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return err;
        }
        const second = result;

        writeFile('./content/result-async.txt', 
    `Here is the result of AYSNC  ${first}, ${second}`,
    (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        //console.log(result);
        console.log('Done with the task...');
    }
    )
    });

});
console.log('Starting the next task...');