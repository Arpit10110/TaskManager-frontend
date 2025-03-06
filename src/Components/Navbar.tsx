import { Link } from "react-router-dom"
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
const Navbar = () => {
  const isuser = localStorage.getItem("token")==null? "":localStorage.getItem("token")
  const [open, setOpen] = useState(false);

  const LogOut = async()=>{
    setOpen(true)
    try {
      const data =await axios.get(`${import.meta.env.VITE_PORT}/signout`,{withCredentials:true})
      console.log(data)
      localStorage.removeItem("token")
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <>
     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <nav className="py-[2rem] flex justify-between px-[2rem] items-center max-[500px]:px-[1rem]  " >
        <h1 className="text-[2rem] font-bold text-purple-400 " >Task Management</h1>
        <div className="flex gap-[3rem] font-semibold text-[1.5rem] text-gray-300 max-[500px]:gap-[1.5rem] max-[400px]:gap-[1rem] " >
            <Link className="hover:scale-[1.02] transition-all" to="/"  >Home</Link>
            <Link className="hover:scale-[1.02] transition-all" to="/createtask"  >Create Task</Link>
            {
              isuser==""?
              <Link className="hover:scale-[1.02] transition-all" to="/signup"  >SignUp</Link>:
              <button className="hover:scale-[1.02] transition-all cursor-pointer " onClick={LogOut}  >LogOut</button>
            }
        </div>
    </nav>
  </>
  )
}

export default Navbar
