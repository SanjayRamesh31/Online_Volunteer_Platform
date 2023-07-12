import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import MainPage from "./Dashboard";
function App() {
  return(
    <div className="ac">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<MainPage/>}/>
      </Routes>
    </div>
  );

}
export default App;