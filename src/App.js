import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="movie/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
