import { useState, useEffect } from 'react'
import {FaUserTie,FaMailBulk,FaKey} from 'react-icons/fa'

const Details=()=>{
    const [list,setList] = useState([])

    useEffect(()=>{
        let data = localStorage.getItem("registrationData")
    if(data!==null){
        data = JSON.parse(data)
    }else{
        data=[]
    }
    setList(data)
    },[])

    return(
        <div className="detail">
            <h3>Basic Information</h3>
            <hr />
            {list.map((data,index)=>{
                return(
                    <div key={index}> 
                        {data.username} <br />
                        {data.email}
                        <hr />
                        </div>
                )
            })}
        </div>
    )
}
export default Details;