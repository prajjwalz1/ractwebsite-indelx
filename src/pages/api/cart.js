import fetch from 'node-fetch';

export default async function handle(req, res) {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const products = await response.json();
    const ids = req.body.ids;
    const filteredProducts = products.filter(product => ids.includes(product.id));
    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
