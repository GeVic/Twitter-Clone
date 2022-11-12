const express = require('express');
const loginRoute = require('./routes/loginRoutes');
const middlewares = require('./middlewares');

const app = express();
const port = 3000;
const server = app.listen(port, () => {console.log('Listening on port 3000')});

app.set("view engine", "pug");
app.set("views", "views");

// Routes
app.use('/login', loginRoute);

app.get("/", middlewares.requireLogin, (req, res, next)=> {
    res.status(200).render("home");
})