import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories"
import About from "./About"
import Header2 from "./Header2";

function App() {
  return (
    <div className="app">
      <Header2 />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech"/>}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="about" element={<About />}/>
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
