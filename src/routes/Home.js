import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <div>
        <h1>Home Ash</h1>
        <Link to="/products">Products</Link>
        <button onClick={navigateHandler}>Products</button>
    </div>
  );
}

export default HomePage;