/**
 * 
 */

document.addEventListener('DOMContentLoaded', function (){
	
	
	var bunleProducts = [];
	bunleProducts.push(new Products("hlqb", 1 , 1));
	bunleProducts.push(new Products("margarin", 2 , 1));
	bunleProducts.push(new Products("lutenica",3 , 1));
	console.log(bunleProducts)
	products = Bundle.factory(bunleProducts, "sandwich");
	console.log(products)
	
}, false);