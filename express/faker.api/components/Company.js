const {faker} = require('@faker-js/faker');

class Company{
    constructor(){
        this.name = faker.company.companyName(),
        this.address = {
            'street': faker.address.streetAddress(true),
            'city' : faker.address.city(),
            'state' : faker.address.state(),
            'zipCode' : faker.address.zipCode(),
            'country' : faker.address.country(),
            'phone' : faker.phone.phoneNumber('800-###-####')
        }
    }
}

module.exports = Company;