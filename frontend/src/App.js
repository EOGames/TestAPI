import { Route,Routes } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Home from "./Home";
import Topbar from "./Topbar";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/add" element = {<Add/>} />
        <Route path="/update/:id" element = {<Edit/>} />

      </Routes>
      
    </div>
  );
}

export default App;
