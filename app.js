// require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const storyRoutes = require('./routes/storyRoutes');


// create app
const app = express();


// config app
let port = 3000;
let host = "localhost";
app.set('view engine', 'ejs');


// mount middleware
app.use(express.static('public'));
// this is to help in post reqs
app.use(express.urlencoded({extended:true}));
// this will help me logg all the reqs
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

// set up routes
    // for home page
app.get('/', (req, res) => {
    res.render('index');
});

// all reqs with stories prefix, will be handled by storyRoutes
app.use('/stories', storyRoutes);

// error handler
app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // console.log(err.stack);

    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    
    res.status(err.status);
    res.render("error", {error: err});
    
});

// start the server
app.listen(port, host, () => {
    console.log('Server is raining on port ', port);
});