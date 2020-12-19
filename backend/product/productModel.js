const AbstractModel = require("../common/abstractModel");

class Product extends AbstractModel {
	id
	name
	description
	price
	stock
	options

	constructor({
		id,
		name,
		description,
		price,
		stock,
		options,
	}) {
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.stock = stock
		this.options = options
	}
}

module.exports = Product