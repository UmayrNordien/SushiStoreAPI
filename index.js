const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 6969;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');

app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
);

app.use(route);

//frontend - upload front end to firebase then post that URL here//
app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});

// Server is running
app.listen(port, ()=> {
    console.log(`Server is running on port 6969`)
    console.log(`✔️`)
    console.log(`Ctrl + C to exit server`)
});
// Handling all errors
app.use(errorHandling);
