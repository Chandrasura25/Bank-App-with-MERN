import React,{useRef} from 'react'
import img from "../assets/img/undraw_mobile_payments_re_7udl.svg"
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/instagram.png'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'
const LandingPage = () => {
  const navigation = useRef()
  const menuToggle = useRef()
  const toggled =()=>{
     menuToggle.current.classList.toggle('active')
     navigation.current.classList.toggle('active')
  }
  
  return (
    <>
    <header>
            <Link to="/" className="logo">Asura Bank<i class="fa fa-bank" aria-hidden="true"></i></Link>
            <div class="toggle" id="toggle" ref={menuToggle} onClick={toggled}></div>
            <ul class="navigationLp" ref={navigation}>
                <li><Link className='a active' to="/">Home</Link></li>
                <li><Link className='a' to="/signup">Sign Up</Link></li>
                <li><Link className='a' to="/login">Login</Link></li>
                <li><Link className='a' to="/contact">Contact</Link></li>
            </ul>
        </header>
    <div class="container">
    <div class="slider">
        <div class="slide slide1">
          <div class="caption">
            <div class="textBox">
                <p className="p">Welcome to Asura's.</p>
                <h2>Best way to make online payments.</h2>
                
                <p>A new way to make the payments easy, reliable and secure. You can manage all your transactions from your mobile phone.</p>
                <Link to="/">Get Started</Link>
            </div>
             <div class="imgBox">
             <img src={img} alt="" />
             </div>
          </div>
        </div>
        <div class="slide slide2">
        <div class="caption">
           <div class="imgBox">
             <div class="glass">
             <h2>SARAH JOHNSON<br/><i>4567 2578 9863 6363</i></h2>
            </div>
            <div class="textBox">
                <h2>Design Your Debit Cards.</h2>
                <p>A chance to customise your dream cards at your leisure and Most importantly from the comfort of your home.</p>
                <Link to="/">Get Started</Link>
            </div>
          
            </div>
        </div>
        </div>
        <div class="slide slide3">
        <div class="caption">
            <div class="textBox">
                <h2>Online Banking</h2>
                <p>Can't visit the Bank?</p>
                    <p>No Problem! Manage all your transactions from your mobile phone!</p>
                <Link to="/">Learn More</Link>
            </div>
            </div>
        </div>
        <div class="slide slide4">
        <div class="caption">
            <div class="textBox">
                <h2>Open an Account Today</h2>
                <p>We Provide maximum security for you and your assets with little to no discount. </p>
                <Link to="/">Sign Up</Link>
            </div>
            </div>
        </div>
        <div class="slide slide1">
          <div class="caption">
            <div class="textBox">
                <p className="p">Welcome to Asura's.</p>
                <h2>Best way to make online payments.</h2>
                <p>A new way to make the payments easy, reliable and secure. You can manage all your transactions from your mobile phone.</p>
                <Link to="/">Get Started</Link>
            </div>
             <div class="imgBox">
             <img src={img} alt="" />
             </div>
          </div>
        </div>
    </div>
   </div> 
   <ul className="sci">
            <li><Link to="/" className="b"><img src={facebook} alt=""/></Link></li>
            <li><Link to="/" className="b"><img src={twitter} alt=""/></Link></li>
            <li><Link to="/" className="b"><img src={instagram} alt=""/></Link></li>
        </ul>
    </>
  )
}
export default LandingPage