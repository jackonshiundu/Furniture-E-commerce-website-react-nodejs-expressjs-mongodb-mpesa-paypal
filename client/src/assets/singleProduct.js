export const singleProduct = {
  name: 'Table',
  slug: 'table',
  category: 'table',
  images: [
    './assets/table.png',
    './assets/table.png',
    './assets/table.png',
    './assets/table.png',
  ],
  price: 20000,
  originalPrice: 23000,
  discount: function () {
    const discountp = this.originalPrice - this.price;
    return discountp;
  },
  percentage: function () {
    const discountedPrice = this.discount();
    const discountoff = (discountedPrice / this.originalPrice) * 100;
    return discountoff;
  },
  rating: 5,
  numReviews: 2045,
  countInStock: 4,
  color: 'brown',
  featured: false,
  description:
    'table made of soft tiles table made of soft tiles table made of soft tiles table made of soft tiles table made of soft tiles table made of soft tiles',
};
