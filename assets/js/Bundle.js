/**
 * 
 */

function Bundle (name,price,quantity) {
	
Products.call(this ,name ,price ,quantity);
		
	
	var _products = [];
	
	this.getProducts = function () {
		return _products;
	}
	this.addProducts = function (newProduct) {
		_products.push(newProduct);	
	}
	this.getPrice = function (){
		var price = 0;
		for  (var i = 0; i < this.getProducts().length; i++){
			price += this.getProducts()[i].getTotalPrice();
		}
		return price;
	}
	

}

Bundle.prototype = Object.create(Products.prototype);
Bundle.prototype.constructor = Bundle;

Bundle.factory = function (product,name){
	var bundle = new Bundle(name , 0 , 1);
	for(i = 0; i < product.length;i++){
		bundle.addProducts(product[i]);
	}
	return bundle;
}
