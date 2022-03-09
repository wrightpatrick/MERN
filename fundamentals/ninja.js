class Ninja {
	constructor(name, health, speed=3, strength=3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}
	sayName(){
		console.log(`My name is ${this.name}.`);
	}
	showStats(){
		console.log(`${this.name}'s str:${this.strength}, spd:${this.speed}, hp:${this.health}.`);
	}
	drinkEstus(){
		this.health += 10;
		console.log(`${this.name} hp is now ${this.health}`);
	}
	
}

const ninja1 = new Ninja("Rikimaru", 20);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkEstus();
ninja1.showStats();