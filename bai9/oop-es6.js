class Product2 {
    id
    name
    price

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}