const express = require('express');
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const middlewares = require('./middlewares');
const path = require('path');

const app = express();
const port = 3000;
const server = app.listen(port, () => {console.log('Listening on port 3000')});

app.set("view engine", "pug");
app.set("views", "views");

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.get("/", middlewares.requireLogin, (req, res, next)=> {
    res.status(200).render("home");
})