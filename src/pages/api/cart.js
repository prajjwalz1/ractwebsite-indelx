import axios from 'axios';

export default async function handle(req, res) {
  try {
    const response = await axios.get('https://www.getfromnepal.com/productapi');
    const products = response.data;
    const ids = req.body.ids;
    const filteredProducts = products.filter(product => ids.includes(product.id));
    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
