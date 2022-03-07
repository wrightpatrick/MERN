class Fighter{
	constructor(name,playerNum,strength,defense,weight){
		this.name = name;
		this.playerNum = playerNum;
		this.strength = strength;
		this.defense = defense;
		this.weight = weight;
		this.percent = 0;
	}

	attack(opponent){
		if(opponent instanceof Fighter){
			opponent.percent += 5;
			console.log(`${this.name} attacked ${opponent.name} and dealt 5%!`)
		}
	}

	special(opponent){
		if(opponent instanceof Fighter){
			opponent.percent += 15;
			console.log(`${this.name} performed a special ${opponent.name} and dealt 15%!`)
		}
	}
}

// const marth = new Fighter("Marth",1,8,7,5);
// const kirby = new Fighter("Kirby",2,5,5,3);

// console.log(marth);
// kirby.attack(marth);
// kirby.attack(marth);
// kirby.attack(marth);
// kirby.attack(marth);
// marth.special(kirby);
// marth.special(kirby);
// console.log(marth);
// console.log(kirby);

module.exports = Fighter;