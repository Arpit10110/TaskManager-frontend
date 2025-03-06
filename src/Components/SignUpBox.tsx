import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const SignUpBox = () => {
    const navigate = useNavigate();
    const [Name,SetName] = useState("");
    const [Email,SetEmail] = useState("");
    const [Password,SetPassword] = useState("");
    const [open, setOpen] = useState(false);

    interface userdata{
        name: string,
        email: string,
        password: string
    }

    const createuser = async(e:any)=>{
        setOpen(true);
        e.preventDefault();
        const userdata:userdata = {
            name:Name,
            email:Email,
            password:Password
        }
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_PORT}/signup`,userdata)
            if(data.success){
                navigate("/login")
            }else{
                alert(data.message)
                setOpen(false);
            }
        } catch (error) {
            console.log(error);
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
        <div className="flex justify-center mt-[8rem] " >
            <form onSubmit={createuser} className="flex w-[40%] gap-[1rem] flex-col bg-gray-800 px-[1rem] items-center py-[2rem] rounded-[1rem]  " >
                <div className="flex flex-col gap-[1.5rem] w-full " >
                    <input  className="bg-black p-[0.5rem] text-[1.3rem] rounded-[5px] "  type="text" onChange={(e)=>SetName(e.target.value)}  placeholder="Name" required/>
                    <input  className="bg-black p-[0.5rem] text-[1.3rem] rounded-[5px] " type="email" onChange={(e)=>SetEmail(e.target.value)}  placeholder="Email" required/>
                    <input  className="bg-black p-[0.5rem] text-[1.3rem] rounded-[5px] " type="password" onChange={(e)=>SetPassword(e.target.value)}  placeholder="Password" required/>
                    <button className="px-[3rem] py-[0.5rem] bg-blue-900 w-fit m-auto rounded-[10px] text-[1.3rem] hover:scale-[1.02] transition-all cursor-pointer   " >SignUp</button>
                </div>
                <h4 className="text-[1.2rem] text-gray-400 " >Already have account..<Link className="text-blue-400 text-[1.3rem]  " to="/login">Login</Link></h4>
            </form>
        </div>
   </>
  )
}

export default SignUpBox
