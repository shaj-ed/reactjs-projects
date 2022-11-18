import { BrowserRouter } from "react-router-dom";
import AnimatePages from "./pages/AnimatePages.js";
import GlobalStyle from "./styles/GlobalStyles.js";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AnimatePages />
    </BrowserRouter>
  );
};

export default App;
