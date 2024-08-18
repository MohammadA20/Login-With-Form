import { useState } from "react";
import { Login } from "./data";
import { LoginForm } from "./LoginForm";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () =>{
    
  const [login, setLogin] = useState<Login[]>([
    { username: 'mohammad', password: 'adada' },
]);


  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<LoginForm login={login} setLogin={setLogin} />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
