import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [credentials, setCredentials] = useState({
        name: "", email: "", password: "", location:""
    })

    let navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();   //event.preventDefault()- It is  synthetic event  //will prevent the browser from submitting the form and reloading the page automatically
        const response =  await fetch("http://localhost:5000/CreateUser",{
            method: 'POST',
            headers:{               //header nhi headers krna.. Mar gya dhund dhundke😓😓
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:credentials.name, email: credentials.email, password: credentials.password, location: credentials.location
            })
        })
        const json = await response.json()
        console.log(json);
        
        if(!json.success){
            alert("Enter Valid Credentials")
        }

        if(json.success){
            navigate("/Login")
        }
    }

    const onChange = (event) => {           //set credentials use krke value update krege
        setCredentials({
            ...credentials, [event.target.name]: event.target.value         //jo particular name dia hai sbko  // ... means usko waisa hi rehne do
        })
    }   
//  Add name and value with input types for showing them and also use onChange function to add text of our choice
return (
    <div className='container my-5'>    
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name" >Name:</label>        
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} placeholder="Enter Your Name"/>
        </div>                  
        <div className="form-group mt-4">
            <label htmlFor="username">Email address</label>
            <input type="email" className="form-control" name='email' onChange={onChange} value={credentials.email} placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">  We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mt-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Enter Password"/>
        </div>
        <div className="form-group mt-4">
            <label htmlFor="clocation">Address</label>
            <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} placeholder="Enter Address"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/Login" className="btn btn-danger m-3" style={{flexShrink: "0"}}>Already a User?</Link>
    </form>
    </div>
)
}

export default SignUp
