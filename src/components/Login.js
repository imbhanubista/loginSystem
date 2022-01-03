import { useForm } from "react-hook-form";
import{FaArrowAltCircleRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FaUserTie,FaKey} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const Login=()=>{

let navigate = useNavigate()

    const {register,handleSubmit} = useForm()
    const onSubmit = (data)=>{
        let storedData = localStorage.getItem("registrationData")
        if (storedData===null){
            alert("Database is empty")
        }else{
            storedData = JSON.parse(storedData)
            // console.log(storedData)
            // console.log(data)
            let checkData = storedData.find((item)=>item.username === data.username)
            console.log(checkData,data)
            if(checkData===undefined){
                Swal.fire({
                    icon: 'error',
                    // position:'center',
                    title: 'Oops...',
                    text: 'User Id not found!',
                    // toast:true
                  })
            }
            else if(data.password!==checkData.password){
                Swal.fire({
                    icon: 'error',
                    // position:"center",
                    title: 'Oops...',
                    text: 'Invalid Password!',
                    // toast: true,
                  })
            }
            else{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'button',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })
                navigate("/details")
            }
        }
    }
    return(
        <div>
            <strong>Bistaify Book</strong>
            <div className="logincss">
<form onSubmit={handleSubmit(onSubmit)}>
<h2>Account Login</h2>
<hr />
<label htmlFor="userid"><FaUserTie/> User Id:</label> <br />
<input type="text" placeholder="e.g imbhanubista" {...register("username")} /> <br />
<label htmlFor="password"><FaKey/> Password:</label> <br />
<input type="password" placeholder="e.g xXm0MhappY" {...register("password")} /> <br />

<input type="submit" value={"LOGIN"} />
</form>
<footer>Create a Account <Link to="/registration-form">
<button> <FaArrowAltCircleRight/> </button>
</Link> </footer>
</div>
</div>
    )
}

export default Login;