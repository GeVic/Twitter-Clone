const mongoose = require('mongoose');

class Database {
	constructor() {
		this.connect();
	}
	connect() {
		mongoose
			.connect(
				'mongodb+srv://veekiTwitterClone:x2a2UKDhzTBq4EK1@twitterclonecluster.eyeoulp.mongodb.net/?retryWrites=true&w=majority'
			)
			.then(() => {
				console.log('DB connected');
			})
			.catch((err) => {
				console.log('Not connected' + err);
			});
	}
}

module.exports = new Database();
