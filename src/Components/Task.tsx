import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from "../assets/loading.gif"
import { Link } from 'react-router-dom';
const Task = () => {
    const [TaskData, SetTaskData] = useState([]);
    const [open, setOpen] = useState(true);

    useEffect(() => {
    gettask()
    }, [])
    
    const gettask = async()=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_PORT}/gettask`,{
                email:"omagrahari55@gmail.com"
            })
            console.log(data)
            setOpen(false);
            SetTaskData(data.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
   <>
    {
        open?
        <div className='w-full flex justify-center mt-[6rem] ' >
            <img className='w-[20%]' src={Loading} alt="Loading..." />
        </div>:
        <div className='mt-[3rem] my-[8rem]' >
            {
                TaskData.length==0?
                <div className='w-full flex justify-center mt-[6rem] text-[2rem] items-center flex-col gap-[1.5rem] '>
                    <h1>!!! No tasks available..Please add a new task !!!</h1>
                    <Link className='px-[2rem] py-[0.5rem] text-[1.5rem] bg-gray-900 w-fit rounded-[10px] font-semibold text-white ' to="/createtask">Create New Task</Link>
                </div>:
                <div className='w-full flex flex-wrap  justify-around gap-y-[3rem] ' >
                    {
                        TaskData.map((i:any,index)=>{
                            return(
                                <div key={index} className='w-[45%] hover:scale-[1.02] transition-all cursor-default p-[2rem] bg-gray-900 rounded-[1rem] gap-[1.5rem] flex flex-col ' >
                                   <div className='flex justify-end gap-[1.5rem]  ' >
                                        <button className='px-[1rem] py-[0.2rem] text-[1.2rem] rounded-[10px] font-semibold cursor-pointer bg-gray-700' >Edit</button>
                                        <button className='px-[1rem] py-[0.2rem] text-[1.2rem] rounded-[10px] font-semibold cursor-pointer bg-blue-700' >Change Status</button>
                                        <button className='px-[1rem] py-[0.2rem] text-[1.2rem] rounded-[10px] font-semibold cursor-pointer bg-red-700' >Delete</button>
                                        
                                   </div>
                                   <div className='flex flex-col gap-[1rem]  ' >
                                        <h1 className='text-[1.4rem] font-bold ' >{i.title}</h1>
                                        <p className='text-[1.3rem]' >{i.desc}</p> 
                                   </div>
                                   <div>
                                        <h1 className='text-[1.4rem] font-bold '><span className='text-green-700' >Status- </span>{i.status? "Completed":"Incomplete"    }</h1>
                                   </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    }
   </>
  )
}

export default Task
