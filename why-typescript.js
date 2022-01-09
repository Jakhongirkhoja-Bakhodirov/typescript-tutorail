function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadjet ".concat(id),
        price: 99.99
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
var product = getProduct(1);
showProduct(product.name, product.price);
