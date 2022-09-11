import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
