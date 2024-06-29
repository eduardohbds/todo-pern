## To Do list using PERN Postgrees,Express,React and Node

1. Use the command `npm init` to create the server
2. Install the packages `npm i pg,express and cors `
3. Create the file `touch index.js`
4. Connect the server to port 1300
   ```
    import express from "express";

    const app = express();

    app.listen(1300, ()=> {
        console.log("Server is running in port 1300");
    });   
   ```
5. To run use `node index.js`
6. But everytime you make a change you have to run this command, to make the things easy we going to use `nodemon` install it globally `npm i -G nodemon`
7. To parse the data from the client we use JSON and in node.js is represented by this `app.use(express.json());`
8. and to accept request from different domains we use the package cors that is the same name of the protocol CORS of security `app.use(cors());`

### Database configuration

### Routes design


