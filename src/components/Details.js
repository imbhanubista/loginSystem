import { useState, useEffect } from 'react'
import {FaUserTie,FaMailBulk,FaKey,FaEye,FaEyeSlash} from 'react-icons/fa'

const Details=()=>{
    const [list,setList] = useState({})
    const [pass, setPass] = useState(false)
    useEffect(()=>{
        let data = localStorage.getItem("loggedin")
    if(data!==null){
        data = JSON.parse(data)
    }else{
        data={}
    }
    setList(data)
    },[])


    const showPass =()=>{
setPass(!pass)
    }

    return(
        <div className="detail">
            <h3>Basic Information</h3>
            <hr />
            {/* {list.map((data,index)=>{
                return(
                    <div key={index}> 
                      <FaUserTie/> {data.username} <br />
                       <FaMailBulk/> {data.email} <br />
                       <FaKey/> {data.password} <button onClick={showPass}> <FaEye/> </button>
                        <hr />
                        </div>
                )
            })} */}

                        <FaUserTie/> {list.username} <br />
                       <FaMailBulk/> {list.email} <br />
                       <FaKey/> {
                          pass? list.password : "*********"
                       } <button onClick={showPass}> 
                       {
                           pass? <FaEyeSlash/> : <FaEye/>
                       }
                        </button>
        </div>
    )
}
export default Details;