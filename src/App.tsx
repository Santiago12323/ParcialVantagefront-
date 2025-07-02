import { Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage";
import BestOptionPage from "./page/BestOptionPage";


function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<BestOptionPage />} path="/comparar" />
    </Routes>
  );
}

export default App;
