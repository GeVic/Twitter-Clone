const express = require('express');
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logoutRoutes');
const middlewares = require('./middlewares');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./database');
const session = require('express-session');

const app = express();
const port = 3000;
const server = app.listen(port, () => {
	console.log('Listening on port 3000');
});

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // serve static files
app.use(
	session({
		secret: 'twitter clone',
		resave: true,
		saveUninitialized: false,
	})
);

// Routes
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);

app.get('/', middlewares.requireLogin, (req, res, next) => {
	var payload = {
		pageTitle: 'Home',
		userLoggedIn: req.session.user,
	};

	res.status(200).render('home', payload);
});
