import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

import { Route, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout.jsx";
import BlogDetails from "./components/Blog/BlogDetails.jsx";

import store from "./app/store";
import { Provider } from "react-redux";
import AddBlog from "./components/Blog/AddBlog.jsx";
import LikeContextProvider from "./context/LikeContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="add-blog" element={<AddBlog />} />
      <Route path="blog-info/:id" element={<BlogDetails />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LikeContextProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </LikeContextProvider>
    {/* <App /> */}
  </StrictMode>
);
