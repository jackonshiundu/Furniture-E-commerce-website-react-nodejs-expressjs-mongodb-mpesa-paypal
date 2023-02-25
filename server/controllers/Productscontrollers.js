const productmodel = require('../models/productmodel');
const ProductStat = require('../models/Productstat');

const getAllProductsforAdmin = async (req, res, next) => {
  try {
    const products = await productmodel.find();

    const ProductWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(ProductWithStats);
  } catch (error) {
    next(error);
  }
};
const getProductsForTheClient = async (req, res, next) => {
  try {
    const products = await productmodel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: 'Something went Wrong ' });
  }
};
const getFilteredProducts = async (req, res, next) => {
  const search = req.query.search || '';
  const rating = req.query.rating || '';
  const sort = req.query.sort || 'price';

  try {
    let sortBy = sort.split(',')[1] || 'asc';
    const products = await productmodel
      .find({
        name: { $regex: search, $options: 'i' },
        rating: rating,
      })
      .sort(sortBy);

    const total = await products.countDocuments({
      name: { $regex: search, $options: 'i' },
    });
    res.status(200).json({ total, limit, page: page + 1, products });
  } catch (error) {
    res.status(404).json({ message: 'Something went Wrong ' });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productmodel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProductsforAdmin,
  getSingleProduct,
  getProductsForTheClient,
  getFilteredProducts,
};
