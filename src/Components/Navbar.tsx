import { Link } from "react-router-dom"
const Navbar = () => {
  return (
  <>
    <nav className="py-[2rem] flex justify-between px-[2rem] items-center  " >
        <h1 className="text-[2rem] font-bold text-purple-400 " >Task Management</h1>
        <div className="flex gap-[3rem] font-semibold text-[1.5rem] text-gray-300   " >
            <Link className="hover:scale-[1.02] transition-all" to="/"  >Home</Link>
            <Link className="hover:scale-[1.02] transition-all" to="/createtask"  >Create Task</Link>
            <Link className="hover:scale-[1.02] transition-all" to="/signup"  >SignUp</Link>
        </div>
    </nav>
  </>
  )
}

export default Navbar
