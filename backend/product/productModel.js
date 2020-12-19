const AbstractModel = require("../common/abstractModel");

class Product extends AbstractModel {
	id
	name
	description
	price
	stock
	options
}

module.exports = Product