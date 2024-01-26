import * as React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);