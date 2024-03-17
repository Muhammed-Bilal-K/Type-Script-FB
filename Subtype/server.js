var app = {
    name: "someName",
    age: 20,
    access: function () {
        return this.name;
    }
};
console.log(app.access());
var mobile = {
    brand: "apple",
    price: 20,
    getName: function () {
        return this.brand;
    },
};
console.log(mobile.getName());
