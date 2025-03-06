import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
const Createtask: React.FC = () => {
  const isuser = localStorage.getItem("token")==null? "":localStorage.getItem("token")
    const [Title, SetTitle] = useState<string>("");
    const [Desc, SetDesc] = useState<string>("");
    const [DueDate, SetDueDate] = useState<string>("");
    const [minDate, setMinDate] = useState<string>("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    }, []);

    interface taskdatatype{
        user_email: string,
        title:string,
        desc:string,
        status:boolean,
        duedate:string
    }

    const createtask = async(e:any)=>{
        setOpen(true);
        e.preventDefault();
        if(isuser==""){
            alert("Please login")
            setOpen(false)
        }else{
            const taskdata:taskdatatype = {
               title:Title,
               desc:Desc,
               duedate:DueDate,
               status:false,
               user_email:"omagrahari55@gmail.com"
            }
            try {
                const {data} = await axios.post(`${import.meta.env.VITE_PORT}/createtask`,taskdata)
                console.log(data)
                alert("Task created successfully")
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
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
        <Navbar/>
            <div className="flex justify-center mt-[5rem]">
                <form onSubmit={createtask} className="flex w-[40%] max-[700px]:w-[95%]  bg-gray-800 px-[1rem]  py-[2rem] rounded-[1rem]">
                    <div className="flex flex-col gap-[1.5rem] w-full">
                        <input className="bg-black p-[0.5rem] text-[1.3rem] rounded-[5px]" type="text" value={Title} onChange={(e) => SetTitle(e.target.value)} placeholder="Title" required/>
                        <textarea className="bg-black p-[0.5rem] min-h-[25vh] text-[1.3rem] rounded-[5px]" value={Desc} onChange={(e) => SetDesc(e.target.value)} placeholder="Description" required/>
                        <div className="flex gap-[1rem] text-[1.3rem] items-center text-gray-300 ">
                            <h2 className="font-bold">Select the Deadline- </h2>
                            <input type="date" className=" text-white bg-gray-700 rounded-[5px] p-[0.5rem] text-[1.3rem] w-fit " min={minDate}  onChange={(e) => SetDueDate(e.target.value)} required />
                        </div>
                        <button className="px-[3rem] py-[0.5rem] mt-[0.5rem] bg-[#2121aa] font-semibold w-fit m-auto rounded-[10px] text-[1.3rem] hover:scale-[1.02] transition-all cursor-pointer">Create Task</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Createtask 