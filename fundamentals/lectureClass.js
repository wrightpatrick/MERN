//how to create a class, make methods for that class and run those methods

class Sundae{
	constructor(flavor,sauce,toppings,container="tall sundae glass",whipped=true){
		//flavor,numScoops,sauce,toppings,container,whipped(boolean)
		this.flavor = flavor;
		this.numScoops = 5;
		this.sauce = sauce;
		this.toppings = toppings;
		this.container = container;
		this.whipped = whipped;
	}

	eat(){
		this.numScoops -= 1;
		console.log(`wow that's good! I really like ${this.flavor} ice cream!`);
	}
}

const tinRoof = new Sundae("vanilla","chocolate",["sprinkles","peanuts","cherry","strawberries"],"glass",true);
console.log(tinRoof);

const clevelandBrownie = new Sundae("chocolate","caramel",["sprinkles","peanuts","brownie"]);
console.log(clevelandBrownie);
clevelandBrownie.eat();
clevelandBrownie.eat();
console.log(clevelandBrownie);
