const Product = require("./productModel");
const ProductRepository = require("./productRepository");

const productRepository = new ProductRepository()

module.exports = {
    create: async function (req, res) {
        const toCreate = new Product({
            ...req.body
        });

        const product = await productRepository.save(toCreate);

        return res.status(201).json(product);
    },

    update: function (req, res) {
        var id = req.params.id;
        productRepository.findOne({ _id: id }, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product',
                    error: err
                });
            }
            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }

            product.id = req.body.id ? req.body.id : product.id;

            product.save(function (err, product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating product.',
                        error: err
                    });
                }

                return res.json(product);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;
        productRepository.findByIdAndRemove(id, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the product.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
