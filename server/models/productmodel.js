const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },
    category: { type: String, required: true },
    images: [String],
    color: String,
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 3 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Product', productSchema);
