import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 'p1', title: 'A Book', price: 6, description: 'The first book' },
  { id: 'p2', title: 'A Carpet', price: 66, description: 'The first carpet' },
  { id: 'p3', title: 'An Online Course', price: 666, description: 'The first online course' }
];

function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <p>Checkout our awesome products</p>
      <ul>
        {PRODUCTS.map(product => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;