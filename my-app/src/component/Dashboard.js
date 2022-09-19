import React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom'
import img  from '../assets/img/63568-mobile-banking.gif'
import  '../styles/Dashboard.css'
import axios from 'axios'

const Dashboard = () => {
  const ref = useRef()
  const popup = useRef()
  const toggle=useRef()
  const navigation = useRef();
  const main = useRef()
  const transfer = useRef()
  const [userId,setuserId] = useState('');
  const [user, setuser] = useState([])
  const [amount, setamount] = useState('')
  const [Raccount, setRaccount] = useState('')
  const [transferAmount, settransferAmount] = useState('')
    const url='http://localhost:2022/asuraBank/dashboard'
    const fundUrl="http://localhost:2022/asuraBank/fund"
    const transferUrl="http://localhost:2022/asuraBank/transfer"
  useEffect(() => {
    let user =JSON.parse(localStorage.getItem('user'))
    setuser(user)
    let accountNo = user[0].accountNo;
    setuserId(user[0]._id)
    axios.post(url,{accountNo}).then((res)=>{
      setuser(res.data.result)
      console.log(res.data.result);
    })
  }, [])
  const toggleMenu=()=>{
    navigation.current.classList.toggle('active')
    toggle.current.classList.toggle('active')
    main.current.classList.toggle('active')
  }
  const pop=()=>{
    ref.current.classList.toggle('active')
    popup.current.classList.toggle('active')  
  }
  const fund=()=>{
    ref.current.classList.toggle('active')
    popup.current.classList.toggle('active')  
    if(amount !==''){
     let transferD = {userId,transferAmount,Raccount}
    axios.post(fundUrl,transferD).then((res)=>{
      console.log(res.data.result)
    })
    // window.location.reload();
  }
  }
const bring=()=>{
  ref.current.classList.toggle('active')
  transfer.current.classList.toggle('active')
}
  const Transfer=()=>{
    ref.current.classList.toggle('active')
    transfer.current.classList.toggle('active')
    let funding = {userId,amount}
    axios.post(transferUrl,funding).then((res)=>{
      console.log(res.data.result)
    })
  }
  return (
    <>

    {
      user? user.map((user,index)=>(
      <div key={index}>
      <div className="dashboard-body" ref={ref}> 
        <div className="dashboard-container">
         <div className="sidebar">
         <div class="navigation" ref={navigation}>
        <ul>
            <li>
                <Link to="/">
                   <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span> 
                   <span class="title">Home</span>
                </Link>
            </li>
            <li onClick={pop}>
                <Link to="">
                   <span class="icon"><i class="fa fa-money" aria-hidden="true"></i></span> 
                   <span class="title">Fund</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                   <span class="icon"><i class="fa fa-comment" aria-hidden="true"></i></span> 
                   <span class="title">Messages</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                   <span class="icon"><i class="fa fa-question-circle" aria-hidden="true"></i></span> 
                   <span class="title">Help</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                   <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span> 
                   <span class="title">Setting</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                   <span class="icon"><i class="fa fa-lock" aria-hidden="true"></i></span> 
                   <span class="title">Password</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                   <span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span> 
                   <span class="title">Sign Out</span>
                </Link>
            </li>
        </ul>
         </div>
         </div>
         <div className="main-container" ref={main}>
         <div class="topbar">
            <div class="">
              <div class="toggled" ref={toggle} onClick={toggleMenu}></div>
            </div>
            <div class="search">
                <label for="">
                    <input type="search" name="" placeholder="Search Here" id=""/>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </label>
            </div>
            <div className="userCon">
              <h4>{user.fullname}</h4>
              <div class="user">
                <img src={img} alt=""/>
              </div>
            </div>
          </div>
          <div className="mainCon">
            <div className="firstHalf">
            <div className="cardBox">
            <div class="card1">
                <div>
                 <div class="numbers">{user.balance}</div>
                 <div class="cardName">Total Amount</div>
                </div> 
                <div class="iconBx">
                  <i class="fa fa-dollar" aria-hidden="true"></i>
                </div>
             </div>
             <div class="card1">
                <div>
                 <div class="numbers">{user.accountNo}</div>
                 <div class="cardName">Account Number</div>
                </div> 
                <div class="iconBx">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
             </div>
            </div>
            <div class="recentOrders">
                <div class="cardHeader">
                    <h2>Recent Transactions</h2>
                    <Link to="/dashboard" class="btn">View All</Link>
                </div>
                <table>
                    <thead>
                      <tr>
                       <td>Serial Number</td>
                       <td>Amount</td>
                       <td>Payment</td>
                       <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>$100</td>
                        <td>Paid</td>
                        <td><span class="status pending">Pending</span></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>$110</td>
                        <td>Paid</td>
                        <td><span class="status inprogress">In Progress</span></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>$1200</td>
                        <td>Paid</td>
                        <td><span class="status delivered">Delivered </span></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>$1200</td>
                        <td>Paid</td>
                        <td><span class="status return">Return</span></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>$1200</td>
                        <td>Paid</td>
                        <td><span class="status return">Return</span></td>
                      </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className="secondHalf">
              <div className="first">
                <div className="boxtrans">
                  <Link to="/dashboard">
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <p>Rewards & Referral</p></Link>
                  </div>
                  <div className="boxtrans" onClick={bring}>
                    <Link to="">
                  <i class="fa fa-object-group" aria-hidden="true"></i>
                  <p>Bank Transfer</p></Link>
                  </div>
                  <div className="boxtrans" onClick={pop}>
                    <Link to="">
                  <i class="fa fa-pie-chart" aria-hidden="true"></i>
                  <p>Fund</p></Link>
                  </div>
                  <div className="boxtrans">
                    <Link to="/">
                  <i class="fa fa-book" aria-hidden="true"></i>
                  <p>Transaction History</p></Link>
                  </div>
              </div>
                <div className="card">
                  <div className="logo">
                    ASURA <i class="fa fa-bank" aria-hidden="true"></i>
                  </div>
                  <div className="number">
                    4335 5666 9214 0985
                    <p className="date"><small>VALID</small> 03/25</p>
                  </div>
                  <div className="down">
                    <div className="name">
                     <p>CHANDRASURA NIKITA </p>   
                    </div>
                    <div className="cardLogo">
                      VISA
                    </div>
                  </div>
                </div>
            </div>
          </div>
         </div>
        </div>
    </div>

     <div id='popup' ref={popup} className="form">
      <h3>Fund Your Account</h3>
     <input type="hidden" value={userId} placeholder="Account Number" id="" className="form_field" />
      <div class="form_group">
        <input type="number" name="" placeholder="Amount" id="" className="form_field" onChange={(e)=>setamount(e.target.value)} />
        <label for="Amount" className='form_label'>Amount</label>
      </div>
      <button onClick={fund} class="btnfund">Fund</button>
     </div>

     <div id="transfer" ref={transfer} className="form">
      <h3>Transfer with Ease</h3>
     <input type="hidden" value={userId} placeholder="Account Number" id="" className="form_field" />
     <div class="form_group">
        <input type="number" name="" placeholder="Recipient Account Number" id="" className="form_field" onChange={(e)=>setRaccount(e.target.value)}/>
        <label for="Recipient Account Number" className='form_label'>Recipient Account Number</label>
      </div>
      <div class="form_group">
        <input type="number" name="" placeholder="Amount" id="" className="form_field" onChange={(e)=>settransferAmount(e.target.value)}/>
        <label for="Amount" className='form_label'>Amount to Transfer</label>
      </div>
      <div class="form_group">
        <input type="number" name="" readonly placeholder="Amount" value={user.balance} className="form_field" />
        <label for="Amount" className='form_label'>Amount</label>
      </div>
      <button onClick={Transfer} class="btnfund">Transfer</button>

     </div>
      </div>
      


    )) : `<div>Sign Up abeg</div>`}

    </>
  )
}

export default Dashboard