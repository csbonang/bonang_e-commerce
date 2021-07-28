// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// fk is in the products 
Product.belongsTo(Category, {
  // TODO: edit 
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
// fk is in products 
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
// fk is in product 
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: {model: ProductTag}
});

// Tags belongToMany Products (through ProductTag)
// going into model it is going through 
// fk coming from product tag 
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {model: ProductTag}
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
