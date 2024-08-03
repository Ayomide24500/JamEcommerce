import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../Pages/FrontScreen/HomeScreen";
import DashboardLayout from "../components/Dash/DashboardLayout";
import AdminDash from "../Pages/Dashboard/AdminDash";
import CartPage from "../Pages/Cart/CartPage";
import { CartProvider } from "../hook/CartContext";
import React from "react";
import History from "../Pages/Dashboard/History";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "product/:id",
        element: (
          <CartProvider>
            <CartPage />
          </CartProvider>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDash />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);
