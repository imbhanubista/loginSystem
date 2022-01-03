import { useState, useEffect, useRef} from 'react'
import{useForm} from 'react-hook-form'
import style from './style.css'
import Swal from 'sweetalert2'
import {FaUserTie,FaMailBulk,FaKey} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Registration =()=>{
    // const [selected, setSelected] = useState("")
    //to store data in list
    // const [list, setList] = useState([])
    const {register,handleSubmit,reset} = useForm()

// useEffect(()=>{
// // let currentData= [...list]
// let localData= localStorage.getItem("list")

// if(localData!==null){
//     // currentData= localStorage.getItem("list")
//     localData=JSON.parse(localData)

//     setList(localData)
// }
// },[])

    // useEffect(() => {
    //     return () => {
    //         localStorage.setItem('list', JSON.stringify(list) )
    //     }
    // }, [list])

    const onSubmit=(data)=>{
        // data = {...data,image : }
        //data
        //[data]
        


        // let currentData = [...list, data]

        //In case we didnot put "required" keyword in "input field" than this operation should be done
        // if(data.username===""){
        //     Swal.fire('User Id should not be empty')
        // }
        // else if (data.email===""){
        //     Swal.fire('Email should not be empty')
        // }
        // else if (data.password===""){
        //     Swal.fire('Choose a password')
        // }
        // else if (data.rpassword===""){
        //     Swal.fire('Enter your Re-type Password')
        // }
        if(data.password === data.rpassword){
        // setList(currentData)
            Swal.fire({
                position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                    toast:true
                
            })

           let dataToSave = localStorage.getItem("registrationData")
           if(dataToSave===null){
               localStorage.setItem("registrationData", JSON.stringify([data]))
           }else{
               dataToSave = JSON.parse(dataToSave)
               dataToSave= [...dataToSave, data]
               localStorage.setItem("registrationData", JSON.stringify(dataToSave))

           }


        }
        
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Password does not matched</a>',
                toast:true 
                
              })
        }
       reset() 
    }

    //option to select
    // const options = [
    //     { value: 'Male', label: 'Male' },
    //     { value: 'Female', label: 'Female' },
    //     { value: 'Other', label: 'Other' }
    //   ]
      
    //   const selectHandler=(data)=>{
    //       setSelected(data.value)
    //   }
    return(
        <div className='regForm'> 
        <h1>SingUp</h1>
        <hr />
       <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="profile">Profile:</label> <br />
        <input style={{display : "none"}} type="file" accept='image/*' ref={imageRef} required  />
        <button onClick={imageHandler}>Upload</button>
         <br /> */}
           <label htmlFor="username"><FaUserTie/> User ID:</label> <br />
       <input type="text" placeholder='imbhanubista' required {...register("username")} /> <br />
       <label htmlFor="email"><FaMailBulk/> Email:</label> <br />
        <input type="email" placeholder='imbhanubista@gmail.com' required {...register("email")} /> <br />
        <label htmlFor="password"> <FaKey/> Password: </label> <br />
        <input type="password" placeholder='e.g xXyYmOd' required {...register("password")} /> <br />
        <label htmlFor="rpassword"><FaKey/> Conform Password:</label><br />
        <input type="password" placeholder='e.g xXyYmOd' required {...register("rpassword")} /> <br /> 
        <input type="submit" className='submitbtn' value={"Sign Up"} /> 
       </form>
       <footer>Already a member? <Link to="/">
       <button  className='footerlog'>Go & Login</button>
       </Link>  </footer>
<br />
        {/* <Select onChange={selectHandler} options={options} /> */}
{/* {list.map((data,index)=>{
    return(
        <div key={index}>
            {data.username}
            {data.email}
            {data.password}
            {data.rpassword}
            </div>
    )
})} */}
        </ div>
    )
}
export default Registration;