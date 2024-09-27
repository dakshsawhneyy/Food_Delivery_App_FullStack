import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "", password: ""
    })

    let navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();   //event.preventDefault()- It is  synthetic event  //will prevent the browser from submitting the form and reloading the page automatically
        const response =  await fetch("http://localhost:5000/LoginUser",{
            method: 'POST',
            headers:{               //header nhi headers krna.. Mar gya dhund dhundke😓😓
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: credentials.email, password: credentials.password
            })
        })
        const json = await response.json()
        console.log(json);
        
        if(!json.success){
            alert("Enter Valid Credentials")
        }
        
        if(json.success){
            localStorage.setItem("authToken", json.authToken)           //authToken get saved in local storage
            console.log(localStorage.getItem("authToken"))  
            navigate("/Home")
        }
    }

    const onChange = (event) => {           //set credentials use krke value update krege
        setCredentials({
            ...credentials, [event.target.name]: event.target.value         //jo particular name dia hai sbko  // ... means usko waisa hi rehne do
        })
    }   

return (
    <div className='container my-5'>    
    <form onSubmit={handleSubmit}>                  
        <div className="form-group mt-4 w-50 container">
            <label htmlFor="username">Email address</label>
            <input type="email" className="form-control" name='email' onChange={onChange} value={credentials.email} placeholder="Enter email"/>
        </div>
        <div className="form-group mt-4 w-50 container">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Enter Password"/>
        </div>
        <div className='button-box'>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/SignUp" className="btn btn-danger m-3" style={{minWidth: "170px"}}>New user? SignUp</Link>
        </div>
    </form>
    </div>
)
}

export default Login
