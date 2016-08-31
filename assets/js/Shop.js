/**
 * 
 */

function Shop (products){
	
	var _products = [];
	
	this.getProducts = function () {
		return _products;
	}
	this.setProducts = function (newProducts) {
		newProducts = _products;
	}
}

Shop.prototype.addProduct = function(){

}

Shop.prototype.infoProducts = function(){
	return console.log(this.getProducts());
}