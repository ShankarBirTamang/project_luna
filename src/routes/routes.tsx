import App from "@/App";
import Home from "@/pages/Home/Home";
import ProductsList from "@/pages/Products/ProductsList";
import { createBrowserRouter } from "react-router-dom";


export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: () => fetchData()
      },
      {
        path: '/product',
        element: <ProductsList />
      }
    ]
  }
])