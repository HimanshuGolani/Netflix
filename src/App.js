import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./index.css";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
