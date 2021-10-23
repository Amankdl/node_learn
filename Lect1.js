// global object
// ******************

// console.log(global);

// global.setTimeout(() => {//we  don't need to write 'global' as it is already available to the file. (Like window object in brower js)
//     console.log("Hey ! I am clearing the setInterval function");
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//     console.log("In the time interval");
// }, 1000);

// console.log('Directory name : ',__dirname);
// console.log('File name : ', __filename);

// requiring module
// ********************

// const importedStudents = require('./module2'); //requiring single value.
/**
 * we can give any name to variable while exporting a single value from another module(module2.js).
 * for ex :- const importedStudents is a random variable name. 
 */

// const {students, ages} = require('./module2'); //requiring multiple value.
/**
 * we can't give any random name to varibles while exporting multiple values another module(module2.js).
 * for ex :- students and ages both consts are exporting with same name from module2.js 
 */
// console.log(students, ages); 


// File system

// const fs =  require('fs');
/*
// read a file using fs
fs.readFile('./docs/intro.txt', (error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
});
*/

// Write a file. If file not exsists than it will create one.
// fs.writeFile('./docs/intro.txt', 'Hello', ()=>{
//     console.log("Written");
// })

// Create a directory.
// fs.mkdir('./assets', (error)=>{
//     if(error){
//         console.log("Error in creating directory || Already exsists");
//     }else{
//         console.log("Directory created successfully.");
//     }
// })

// Check whether directory or file exists or not
// console.log(fs.existsSync('./assets'));

// remove a directory
// fs.rmdir('./assets', (error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(error);
//     }
// });

// Remove a file
// fs.unlink('./assets/demo.txt', (error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("File deleted successfully");
//     }
// });

/**Streams
 * for large files
 * D/f b/w normal file read-write operations and through stream ?
 * */

// readstream
// const readStream = fs.createReadStream('./docs/streams.txt', {encoding: 'utf8'});
// readStream.on('data', (chunk)=>{
//     console.log(chunk);
// })

// writestream
// const writeStream = fs.createWriteStream('./docs/writeStream');
// const readStream = fs.createReadStream('./docs/streams.txt', {encoding: 'utf8'});
// readStream.on('data', (chunk)=>{
//     writeStream.write(chunk);
//     writeStream.write('\n<---------NEW CHUNK--------->');
// })


// Piping --> Easy way for reading stream and writing into another file.
// readStream.pipe(writeStream);

