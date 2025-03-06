import Navbar from "../Components/Navbar"
import Task from "../Components/Task.tsx"
import { Link } from 'react-router-dom';
const Home = () => {
  const isuser = localStorage.getItem("token")==null? "":localStorage.getItem("token")

  return (
    <>
        <Navbar/>
        {
          isuser==""?
          <div className='w-full flex justify-center mt-[6rem] text-[2rem] items-center flex-col gap-[1.5rem] '>
                    <h1 className="text-center" >!!! No tasks available. Log in to create and manage your tasks! !!!</h1>
                    <Link className='px-[2rem] py-[0.5rem] text-[1.5rem] bg-gray-900 w-fit rounded-[10px] font-semibold text-white ' to="/login">Login Please</Link>
                </div>:
        <Task/>
        }
    </>
  )
}

export default Home
