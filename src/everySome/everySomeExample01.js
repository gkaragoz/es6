function Field(value) {
	this.value = value;
}

Field.prototype.validate = function () {
	return this.value.length > 0;
};

let username = new Field("2cool");
let password = new Field("my_password");
let birthDate = new Field("10/10/2010");

let fields = [username, password, birthDate];

console.log(fields.every((field) => field.validate()));
