import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/Home";
import ProductsPage from "./routes/Products";
import RootLayout from "./routes/Root";
import ErrorPage from "./routes/Error";
import ProductDetailPage from "./routes/ProductDetail";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={BrowserRouter}></RouterProvider>;
}

export default App;
