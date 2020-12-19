class ProductInputValidator {
    makeException(status, message) {
        return {
            status,
            message
        }
    }

    validateCreateProductInput(req, res, next) {
        if (!req.body) {
            res.status(400).send(this.makeException(400, `missing body.`))
        }
        const {
            name,
            price,
            brand,
        } = req.body
        if (!name) {
            res.status(400).send(this.makeException(400, `missing name.`))
        }

        if (!price) {
            res.status(400).send(this.makeException(400, `missing price.`))
        }

        if (!brand) {
            res.status(400).send(this.makeException(400, `missing brand.`))
        }

        next()
    }

    validateUpdateProductInput(req, res, next) {
        if (!req.body) {
            res.status(400).send(this.makeException(400, `missing body.`))
        }

        if (!req.params.productId) {
            res.status(400).send(this.makeException(400, `missing product id.`))
        }

        next()
    }


    validateRemoveProductInput(req, res, next) {
        if (!req.params.productId) {
            res.status(400).send(this.makeException(400, `missing product id.`))
        }

        next()
    }
}

module.exports = ProductInputValidator