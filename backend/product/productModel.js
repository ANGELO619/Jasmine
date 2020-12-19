const AbstractModel = require("../common/abstractModel");

class Product extends AbstractModel {
	id
	name
	description
	image
	price
	options
	countInStock
	brand

	constructor({
		id,
		name,
		description,
		price,
		options,
		countInStock,
		brand,
		image
	}) {
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.stock = stock
		this.options = options
		this.countInStock = countInStock
		this.brand = brand
		this.image = image
	}
}

module.exports = Product