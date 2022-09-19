import React,{useState} from 'react'
import '../styles/Login.css';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const url='http://localhost:2022/asuraBank/login'
    const [email, setemail] = useState('') 
    const [password, setpassword] = useState('')
    const [errMessage,seterrMessage]=useState('')
    const login =()=>{
        if(password !=='' &&  email !== ''){
            let userDetails = {email,password};
            axios.post(url,userDetails).then((res)=>{
                seterrMessage(res.data.message)
                let result = res.data.result
                localStorage.user = JSON.stringify(res.data.result)
                if(result.length > 0){
                  navigate('/dashboard')    
                }
            }).catch((err)=>{
              console.log(err);
            })
        }
        else{
            let message = 'Some of your input is missing a value, Please fill up completely'
            seterrMessage(message)
        }
    }
  return (
    <>
    <div className="signup-body">
    <p>{errMessage}</p> 
    <div class="container-fluid">
        <div class="form-contain sign-in-container">
            <div className='form'>
                <h1>Sign In</h1>
                <div class="social-container">
                    <Link to="/" class="social"><i class="fa fa-facebook-f" aria-hidden="true"></i></Link>
                    <Link to="/" class="social"><i class="fa fa-google-plus" aria-hidden="true"></i></Link>
                    <Link to="/" class="social"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                </div>
                <span>or use your account</span>
                <div class="form_group">
                    <input type="email" name="" placeholder="Email Address" id="" className="form_field" onChange={(e)=>setemail(e.target.value)} />
                    <label for="Email Address" className='form_label'>Email Address</label>
                </div>
                <div class="form_group">
                    <input type="password" name="" placeholder="Password" id="" className="form_field" onChange={(e)=>setpassword(e.target.value)} />
                    <label for="Password" className='form_label'>Password</label>
                </div>
                <Link to="/" class="forgot">Forgot Your Password?</Link>
                <button onClick={login}>Sign In</button>
            </div>
        </div>
        <div class="overlay-contain">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                <h1>Hello, Friend</h1>
                    <p>Enter your personal details and start your journey with us</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login