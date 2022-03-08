import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/Header";

import Main from "./pages/Main";
import Country from "./pages/Country";

function App() {
  return (
    <>
      <Router>
        <div className=" font-body h-full bg-very-light-gray font-nunito-sans text-homepage-items text-very-dark-blue2 dark:bg-very-dark-blue1 dark:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/country/:cca2" element={<Country />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
