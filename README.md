## To Do list using PERN Postgrees,Express,React and Node

1. Use the command `npm init` to create the server
2. Install the packages `npm i pg,express and cors `
3. Create the file `touch index.js`
4. Connect the server to port 1300
   1. ```
    import express from "express";

    const app = express();

    app.listen(1300, ()=> {
        console.log("Server is running in port 1300");
    });   
   ```
5. To run use `node index.js`
6. But everytime you make a change you have to run this command, to make the things easy we going to use `nodemon`
7. 

