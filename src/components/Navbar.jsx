import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate();
    
    const handleLogOut = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }

return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
        <Link className="navbar-brand fst-italic fs-3 active" to="/Home">YumDrop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link fw-bold fs-6" aria-current="page" to="/Home">Home</Link>
                </li>
            {(localStorage.getItem("authToken")) ?
                    <li className="nav-item">
                    <Link className="nav-link fw-bold fs-6" to="/MyOrders">My Orders</Link>
                    </li>
                : ""}
        </ul>
        {(!localStorage.getItem("authToken")) 
            ? <div className="d-flex" role="Login"> 
            <Link to="/Login"><button className="btn btn-outline-primary mx-3" type="submit">Login</button></Link>
            <Link to="/SignUp"><button className="btn btn-outline-warning" type="submit">SignUp</button></Link>
            </div>
                : <div className="d-flex" role="Log out"> 
                <Link to="/MyCart"><button className="btn btn-outline-warning mx-1" type="cart"><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>My Cart</button></Link>
                <button onClick={handleLogOut} className="btn btn-outline-primary mx-3" type="submit">Log Out</button>
                </div>    }
        
        </div>
    </div>
</nav>
    </div>
)
}

export default Navbar
