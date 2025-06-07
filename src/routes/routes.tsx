import App from "@/App";
import Home from "@/pages/Home/Home";
import ProductsList from "@/pages/Products/ProductsList";
import Profile from "@/components/ui/Profile";
import Cart from "@/components/ui/Cart";
import { createBrowserRouter } from "react-router-dom";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: () => fetchData()
      },
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
