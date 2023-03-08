// Import fs node module
const fs = require('fs');

//Reading a file
fs.readFile('./docs/newfile.txt', (data, err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

//Writing a file (If file with the name doesn't exist thn it create a new file)
fs.writeFile('./docs/newfile.txt', 'hello new journey',()=>{
    console.log("content changed");
})

//Directeries 
//Note : existsSync to check folder already exists
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleting files
if(fs.existsSync('./docs/xyz.txt')){
    fs.unlink('./docs/xyz.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
