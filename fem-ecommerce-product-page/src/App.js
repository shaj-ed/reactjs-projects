import { AppProvider } from "./Context/appContext";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Lightbox from "./Components/Lightbox";

// TODO => 1. slice product name at cart, 2. make sure slider functionality work properly.

function App() {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <Lightbox />
    </AppProvider>
  );
}

export default App;
