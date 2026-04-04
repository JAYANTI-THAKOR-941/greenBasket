import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  })


  const navigate = useNavigate();

  // To set input data into form
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  
  // register logic - save data into db.json
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const newUser = {
        id:Date.now(),
        name:form.name,
        email:form.email,
        password:form.password,
        role:'user'
      }

      await axios.post('http://localhost:3000/users',newUser);
      alert('Register successfully.!!');
      navigate('/login');

    }
    catch(error){
      console.log('Faild to register user.!!',error);
    }
  }

  return (
    <div>
      <div className="input-group">
        <input type="text" placeholder='Name' name='name' onChange={handleChange}  />
      </div>
       <div className="input-group">
        <input type="text" placeholder='Email' name='email' onChange={handleChange}  />
      </div>
       <div className="input-group">
        <input type="text" placeholder='Password' name='password' onChange={handleChange}  />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Register