import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./component/ContactForm";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/contact" element={<ContactForm></ContactForm>}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
