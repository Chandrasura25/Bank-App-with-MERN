import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import "../styles/Page404.css"
const Page404 = () => {
  const container= useRef()
    window.onmousemove = function(e){
        const x = - e.clientX / 5
        const y = - e.clientY / 5
        container.current.style.backgroundPositionX = x + 'px'
        container.current.style.backgroundPositionY = y + 'px'
    }
  return (
    <>
    <div className="body">
    <div id="container" ref={container}>
        <div className="content">
            <h2>404</h2>
            <h4>Opps! Page not found</h4>
            <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
            <Link to='/' className='Link'>Back To Home</Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Page404