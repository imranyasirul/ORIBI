import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";
import ShopIndex from "./pages/shop/ShopIndex";

const routes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<HomeIndex />} />
    <Route path="/shop" element={<ShopIndex />} />
  </Route>,
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
