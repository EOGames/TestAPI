import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Topbar from "./Topbar";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element = {<Home/>} />

      </Routes>
      
    </div>
  );
}

export default App;
