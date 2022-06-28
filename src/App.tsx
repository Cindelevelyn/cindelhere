import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Social } from "./components/Social";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-darkBlue flex flex-col">
      <div className="bg-darkBlue sticky top-0">
        <Header />
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-darkBlue flex flex-col flex-1">
          <Home />
          <About />
        </div>
        <aside className="flex m-10 max-h-[400px] sticky right-0">
          <Social />
        </aside>
      </div>
    </div>
  );
}

export default App;
