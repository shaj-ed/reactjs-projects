import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import AnimatedPages from "./pages/AnimatedPages";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AnimatedPages />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
