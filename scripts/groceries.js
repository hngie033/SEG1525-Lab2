	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.25
	},
	{
		name: "bananas",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.75
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "deluxe gluten sauce",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 99.99
	},
	{
		name: "chicken soup",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 2.00
	},
	{
		name: "oranges",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "ribs",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.00
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "veggie soup",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00
	}
];

function compare( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

products.sort(compare);


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction) {
	let prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			prices.push(prods[i].price);
		}
	}
	return prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
