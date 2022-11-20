const person = require("./0001-person");

module.exports = async () => {
	await person.seed();
};
