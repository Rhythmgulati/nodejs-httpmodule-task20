// Importing required modules
const http = require("http");
const fs = require("fs");

// Setting up the port to listen on, either from the environment variable PORT or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Creating a HTTP server instance
const server = http.createServer(async(req,res)=>{
    // Extracting the URL from the request
    const {url} = req;
    console.log(url);

    // Handling requests for the CSS file
    if(url=="/style.css"){
        fs.readFile("style.css",'utf-8',(err,data)=>{
            if(err){
                // Sending 500 Internal Server Error if file reading fails
                res.writeHead(500);
                res.send('internal server error');
            } else {    
                // Sending the CSS file content if read successfully
                res.end(data);
            }
        });
    }

    // Handling requests for the home page
    if(url==="/"){
        fs.readFile("home.html",'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500);
                res.send('internal server error');
            } else {    
                res.end(data);
            }
        });
    } else if(url==="/about"){
        // Handling requests for the about page
        fs.readFile("about.html",'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500);
                res.send('internal server error');
            } else {    
                res.end(data);
            }
        });
    } else if(url==="/contact"){
        // Handling requests for the contact page
        fs.readFile("contact.html",'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500);
                res.send('internal server error');
            } else {    
                res.end(data);
            }
        });
    } else {
        // Handling requests for any other URL (error page)
        fs.readFile("error.html",'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500);
                res.send('internal server error');
            } else {    
                res.end(data);
            }
        });
    }
});

// Start listening on the specified port
server.listen(PORT,()=>{console.log(`Listening to ${PORT}`)});