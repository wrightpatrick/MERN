const Ninja = require("./ninja");

class Sensei extends Ninja {
	constructor(name){
		super(name, 200, 10, 10);
		this.wisdom = 10;
	}
	speakWisdom(){
		super.drinkEstus();
		console.log("Our greatest glory is not in never falling, but in rising every time we fall.");
	}

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


