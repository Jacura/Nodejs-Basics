const express = require('express');
const ejs = require('ejs');

//express app
const app = express();

//register view engine
app.set("view engine", 'ejs');

//listen on port 300
app.listen(3000);

app.get('/', (req,res)=>{
    const blogs = [
        { title: "Blog1 Heading", snippet: "New Blog1 snippet heading is here so enjoy"},
        { title: "Blog2 Heading", snippet: "New Blog2 snippet heading is here so enjoy"},
        { title: "Blog3 Heading", snippet: "New Blog3 snippet heading is here so enjoy"},
        { title: "Blog4 Heading", snippet: "New Blog4 snippet heading is here so enjoy"}
    ]
    // res.sendFile('./views/index.html', { root: __dirname});
    res.render("index", { title: "Home", blogs: blogs });
})

app.get('/about', (req,res)=>{
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render("about");
})

app.get('/about-me', (req,res)=>{
    res.redirect('/about');
})

app.get('/blogs/create',(req,res)=>{
    res.render("create");
})

//404 Error
app.use((req,res)=>{
    res.status(404).render("404");
})