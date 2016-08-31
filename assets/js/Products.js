/**
 * 
 */



function Products (name,price,quantity) {
	var _name = name;
	var _price = price;
	var _quantity = quantity;
	
	this.getName = function () {
		return _name;
	}
	this.setName = function (newName) {
		newName = _name;
	}
	this.getPrice = function () {
		return _price;
	}
	this.setPrice = function (newPrice) {
		newPrice = _price;
	}
	this.getQuantity = function () {
		return _quantity;
	}
	this.setQuantity = function (newQuantity) {
		newQuantity = _quantity;
	}
	this.getTotalPrice = function (){
		return this.getPrice() * this.getQuantity();
	}
}
