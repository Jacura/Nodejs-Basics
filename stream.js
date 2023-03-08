// STREAM: Start using data, before it has finished loading

const fs = require('fs');
const readStream  = fs.createReadStream('./docs/blog.txt', {encoding: "utf8"});
const writeStream  = fs.createWriteStream('./docs/blog2.txt');


readStream.on('data',(chunk) => {
    console.log("----NEW CHUNK-----");
    console.log(chunk);
    writeStream.write("-------New Available chunk-------");
    writeStream.write(chunk);
})

//Piping(will do the same write work as we are doing above)
readStream.pipe(writeStream);