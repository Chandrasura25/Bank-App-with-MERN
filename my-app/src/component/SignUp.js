import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
import '../styles/SignUp.css'
const SignUp = () => {
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [number, setnumber] = useState('')
    const [errMessage,seterrMessage]=useState('')
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let currentDate = `${date}-${month}-${year}`
    const navigate = useNavigate()
    const submit =()=>{
        const url='http://localhost:2022/asuraBank/signup'
        const accountNo = '13' + Math.floor(Math.random()*100000000)
        if(fullname !=='' &&  email !== '' && password !== '' && number !== ''){
            let balance=0;
            let userDetails = {fullname,email,password,number,accountNo,currentDate,balance};
            console.log(userDetails);
            axios.post(url,userDetails).then((res)=>{
                console.log(res);
                seterrMessage(res.data.message)
                localStorage.user = JSON.stringify(res.data.result)
                navigate('/dashboard')    
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
        <div class="form-container sign-up-container">
            <div className='form' action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <Link to="/" class="social"><i class="fa fa-facebook-f" aria-hidden="true"></i></Link>
                    <Link to="/" class="social"><i class="fa fa-google-plus" aria-hidden="true"></i></Link>
                    <Link to="/" class="social"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                </div>
                <span>or use your email for registration</span>
                <div class="form_group">
                    <input type="text" name="fullname" placeholder="Fullname" id="" className="form_field" onChange={(e)=>setfullname(e.target.value)} />
                    <label for="Fullname" className='form_label'>Fullname</label>
                </div>
                <div class="form_group">
                    <input type="email" name="" placeholder="Email Address" id="" className="form_field" onChange={(e)=>setemail(e.target.value)}/>
                    <label for="Email Address" className='form_label'>Email Address</label>
                </div>
                <div class="form_group">
                    <input type="number" name="" placeholder="Phone Number" id="" className="form_field" onChange={(e)=>setnumber(e.target.value)} maxLength={11}/>
                    <label for="Phone Number" className='form_label'>Phone Number</label>
                </div>
                <div class="form_group">
                    <input type="password" name="" placeholder="Password" id="" className="form_field" onChange={(e)=>setpassword(e.target.value)} minLength={8} />
                    <label for="Password" className='form_label'>Password</label>
                </div>
                <button className='button' onClick={submit}>Sign Up</button>
            </div>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Already have an account?</h1>
                    <p>To keep connecting with us, please login with your personal info</p>
                    <button to='/login'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default SignUp