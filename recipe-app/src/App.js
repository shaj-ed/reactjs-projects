import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";

import Home from "./pages/Home";
import Search from "./pages/Search";
import SharedLayout from "./pages/SharedLayout";
import SingleRecipeDetail from "./pages/SingleRecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/recipe/:id" element={<SingleRecipeDetail />} />
          <Route path="/search/:type" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
