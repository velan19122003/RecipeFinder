import DevProfile from "./Components/DevProfile";
import Favourites from "./Components/Favourites";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Recommendations from "./Components/Recommendations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./Components/Results";
import Overview from "./Components/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="result" element={<Results />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
