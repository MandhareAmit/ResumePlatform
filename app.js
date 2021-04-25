const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const catchAsync = require('./utilis/catchAsync');
const ExpressError = require('./utilis/ExpressError');
const bodyParser = require('body-parser');
const session = require('express-session');


//database connection
require('dotenv').config();
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDb conection error:"));
db.once('open', () => {
    console.log("database connected");
})

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Acces-Control-Allow-Methods','GET, POST, PATCH, DELETE');


    next();
  });
  
app.use(cors());
app.options('*', cors());

const sessionConfig = {
    secret: 'thisisscerete',
    resave: false,
    saveUnintialized: true,
    
}
app.use(session(sessionConfig));

//api routes
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
app.use('/', userRoute)
app.use('/profile', profileRoute);


//Error handler middleware
app.all('*', (req, res, next) => {
    next(new ExpressError('page not found', 404));
}); 

app.use(async(err, req, res, next ) => {
    const { statusCode = 500 , message = 'Something went wrong'} = err;
    res.send(message);
    await res.status(statusCode);
    
}); 


//server running on port 3000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on ${port}`);
})