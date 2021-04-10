const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catchAsync = require('./utilis/catchAsync');
const ExpressError = require('./utilis/ExpressError');

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

app.use(express.urlencoded({extended: true}));


//api routes
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
app.use('/', userRoute)
app.use('/profile', profileRoute);


/* app.all('*', (req, res, next) => {
    next(new ExpressError('page not found ', 404));
});

app.use((err, req, res, next) => {
    const {statusCode = 500 } = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error', { err });
    //res.send('Ohh Sorry, Something Went Wrong');
});
 */
//server running on port 3000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on ${port}`);
})