import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout"
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<LandingPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
