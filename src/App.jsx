import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";
import ShopIndex from "./pages/shop/ShopIndex";
import ErrorPages from "./components/common/ErrorPages";
import CartIndex from "./pages/cart/CartIndex";
import LoginPage from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import MyAccount from "./pages/myAccount/MyAccount";
import ContactIndex from "./pages/contact/ContactIndex";

const routes = createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route index element={<HomeIndex />} />
      <Route path="/shop" element={<ShopIndex />} />
      <Route path="/cart" element={<CartIndex />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<MyAccount />} />
      <Route path="/contacts" element={<ContactIndex />} />
    </Route>
    ,
    <Route path="*" element={<ErrorPages />} />
  </>,
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
