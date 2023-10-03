import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/Home";
import ProductsPage from "./routes/Products";
import RootLayout from "./routes/Root";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={BrowserRouter}></RouterProvider>;
}

export default App;
