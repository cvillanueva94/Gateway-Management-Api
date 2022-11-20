const { Person } = require("../modules/auth/models");
const seed = async () => {
	const exist = await Person.findOne({ userName: "admin" });

	if (!exist) {
		const p = new Person({
			name: "admin",
			userName: "admin",
			password: "Asd1234*",
		});
		await p.save();
	}
};

module.exports = Object.freeze({
	seed,
});
