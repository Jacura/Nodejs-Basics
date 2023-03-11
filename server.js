const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log("Request Made!!!");
    console.log(req.url, req.method);
    
    //set header content type
    res.setHeader('Content-type','html');
    // res.write('<h1>Hello Everyone</h1>');
    // res.write('<h1>Just Closing my day!!</h1>');
    // res.end();

    //Routing Basic
    let path = './views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += '/about.html';
            res.setHeader('Location','/about')
            res.end();
            res.statusCode = 301;
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    //Now to use view(html) file 
    fs.readFile(path,(data,err)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data);
            res.end(data);
        }
    })
})

server.listen('3000', 'localhost',()=>{
    console.log("Listening for requests on port 3000!!");
})

// Status Codes:
// 200 :OK,  301: Resourse Moved, 404: Not found, 500: Internal Server Error

// 100 Ranges - Informational responses
// 200 Range - Success COde
// 300 Range - Code for redirects
// 400 Range - User err and clent code err
// 500 Range - Server code err