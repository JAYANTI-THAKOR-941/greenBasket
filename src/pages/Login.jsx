import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  // login logic - get from  data from db.json 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
        const users = res.data;
        // console.log(users);
        if(users.length > 0 ){
          const loginUser = users[0]
          localStorage.setItem('greetBasketUser',JSON.stringify(loginUser));
          alert('Login successfully.!')
          navigate('/');
        }
        else{
          alert('Incorrect email and password.!!');
        }
    }
    catch(error){
      console.log('Faild to login user.!!',error);
    }
  }

  return (
    <div>
       <div className="input-group">
        <input type="text" placeholder='Email' name='email' onChange={(e)=>setEmail(e.target.value)}  />
      </div>
       <div className="input-group">
        <input type="text" placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)}  />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login