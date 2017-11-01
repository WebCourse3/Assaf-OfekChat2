/**/
class User {
	constructor(name) {
		this.name = name;
		this.ui = new UI();
	}

	getUI() {
		return this.ui;
	}

}

