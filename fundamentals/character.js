const Fighter = require("./fighter");

class Samus extends Fighter{
	constructor(playerNum){
		super("Samus",playerNum,8,6,8);
		this.charged = false;
	}

	special(opponent){
		if(this.charged){
			this.charged = false;
			opponent.percent += 35;
			console.log(`Samus fired her charge shot at ${opponent.name} and dealt 35%!!`);
		} else {
			this.charged = true;
			console.log(`Samus is charging her arm cannon!`);
		}
	}
}

class Jigglypuff extends Fighter{
	constructor(playerNum){
		super("Jigglypuff",playerNum,3,8,1);
	}

	special(opponent){
		if((Math.floor(Math.random() * 2) === 1)){
			opponent.percent += 40;
			console.log(`Jigglypuff used rest on ${opponent.name}. Its super effective!`)
		} else {
			console.log(`Jigglypuff used rest on ${opponent.name}. It didn't work though...`)
		}
	}
}

const marth = new Fighter("Marth",1,8,7,5);
const samus = new Samus(2);
const jigglypuff = new Jigglypuff(3);

console.log(marth.percent);
samus.attack(marth);
samus.attack(marth);
samus.special(marth);
samus.special(marth);
marth.special(samus);
marth.special(samus);
console.log(marth.percent);
console.log(samus.percent);
jigglypuff.special(samus);
jigglypuff.special(samus);
jigglypuff.special(samus);
jigglypuff.special(samus);
jigglypuff.special(samus);
jigglypuff.special(samus);
console.log(samus.percent);