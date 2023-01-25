import { Route, Router, Routes } from "react-router-dom";
import CreatePost from "./CreatePost.js";
import Login from "./Login.js";
import Register from "./Register.js";
function App() {
  return (
    <div>
      <Routes>
      <Route path ="/login" element = {<Login/>}/>
      <Route path ="/register" element = {<Register/>}/>
      <Route path ="/CreatePost" element = {<CreatePost/>}/>
    
    </Routes>
    </div>

  );
}

export default App;
