const AbstractRepository = require("../common/abstractRepository");

class ProductRepository extends AbstractRepository {
    constructor(db) {
        super(db)
    }
}

module.exports = ProductRepository