// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // TODO: edit 
  foreignKey: 'driver_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'driver_id',
  through: ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'driver_id',
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
