import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Minicart from "./components/Minicart";
import { MyContextProvider } from "./components/MyContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <Header />
        <Minicart />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
