import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Social } from "./components/Social";
import { Projects } from "./pages/Projects";
import { BrowserRouter, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  // const [count, setCount] = useState(0);
  return(
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
