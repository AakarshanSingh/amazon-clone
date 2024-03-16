import Product from '../models/Product.js';
import Order from '../models/Order.js';

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
    if (!product) {
      return res.status(400).json({ msg: 'No product found with the id' });
    }

    res.json({ msg: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const changeOrderStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    let order = await Order.findById(id);
    order.status = status;
    order = await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const analytics = async (req, res) => {
  try {
    const orders = await Order.find({});
    let totalEarnings = 0;
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].products.length; j++) {
        totalEarnings +=
          orders[i].products[j].quantity * orders[i].products[j].product.price;
      }
    }

    let mobileEarnings = await fetchCategoryProduct('Mobiles');
    let essentialEarnings = await fetchCategoryProduct('Essentials');
    let applianceEarnings = await fetchCategoryProduct('Appliances');
    let booksEarnings = await fetchCategoryProduct('Books');
    let fashionEarnings = await fetchCategoryProduct('Fashion');

    let earnings = {
      totalEarnings,
      mobileEarnings,
      essentialEarnings,
      applianceEarnings,
      booksEarnings,
      fashionEarnings,
    };
    res.json(earnings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchCategoryProduct = async (category) => {
  let earnings = 0;

  let categoryOrders = await Order.find({
    'products.product.category': category,
  });

  for (let i = 0; i < categoryOrders.length; i++) {
    for (let j = 0; j < categoryOrders[i].products.length; j++) {
      earnings +=
        categoryOrders[i].products[j].quantity *
        categoryOrders[i].products[j].product.price;
    }
  }
  return earnings;
};
