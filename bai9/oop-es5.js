function Product1(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;

    this.getName = function() {
        return this.name;
    }

    this.setName = (name) => {
        this.name = name;
    }
}