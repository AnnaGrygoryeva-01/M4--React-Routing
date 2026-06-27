import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Counter from "./pages/Tools/Counter";
import StopWatch from "./pages/Tools/StopWatch";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<Tools />}>
              <Route path="counter" element={<Counter />} />
              <Route path="stopwatch" element={<StopWatch />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
