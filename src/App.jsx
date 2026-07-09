import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Counter from "./components/Counter";
import StopWatch from "./components/StopWatch";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />}>
            <Route index element={<Counter />} />
            <Route path="stopwatch" element={<StopWatch />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
