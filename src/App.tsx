import { HashRouter as Router , Routes,Route  } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp.tsx"
import Login from "./Pages/Login.tsx"
import Createtask from "./Pages/Createtask.tsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/signup"  element={<SignUp/>}  />
        <Route path="/login"  element={<Login/>}  />
        <Route path="/createtask"  element={<Createtask/>}  />
      </Routes>
    </Router>
  )
}

export default App
