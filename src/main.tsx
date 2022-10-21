import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

import { httpClient } from "./infra/AxiosHttpClient";
import { CustomerService } from "./domain/Customer/services/CustomerService";

import { HomePage } from "./pages/Home";
import { CreateCustomerPage } from "./pages/Create";
import { EditCustomerPage } from "./pages/Edit";

const customerService = new CustomerService(
  httpClient({ baseURL: "http://localhost:1234" })
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage customerService={customerService} />,
  },
  {
    path: "/create",
    element: <CreateCustomerPage customerService={customerService} />,
  },
  {
    path: "/edit/:id",
    element: <EditCustomerPage customerService={customerService} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
