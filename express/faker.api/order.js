const {faker} = require('@faker-js/faker');

class Order{
    constructor(){
        const bases = ["dark roast", "chai tea", "green tea", "espresso", "light roast", "columbian", "black tea", "hot water", "drip"];
        const additives = ["vanilla syrup", "sugar", "splenda", "cream", "milk", "chocolate syrup"];
        this.name = faker.name.findName();
        this.base = bases[Math.floor(Math.random() * bases.length)];
        this.additive = additives[Math.floor(Math.random() * bases.length)];
        this.coffeeShop = faker.company.companyName() + " Coffee Roasters Inc.";
        this.customer = faker.image.avatar();
    }
    
}

module.exports = Order;