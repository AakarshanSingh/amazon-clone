import Product from '../models/Product.js';

export const addProduct = async (req, res) => {
  try {
    const { name, description, images, quantity, price, category } = req.body;
    let product = new Product({
      name,
      description,
      images,
      quantity,
      price,
      category,
    });
    product = await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    let product = await Product.findByIdAndDelete(id);
    console.log(product);
    if (!product) {
      return res.status(400).json({ msg: 'No product found with the id' });
    }

    res.json({ msg: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
