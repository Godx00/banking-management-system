import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie'
import './css/Login/Login.css'
import BasicExample from './CustomNavbar';
const Login = () => {
    const [user, setUser] = useState([]);
const [ipname, setIpName ] = useState('');
const [ippass ,  setIpPass] = useState('');

const navigate = useNavigate();

const getUsers=()=>
{
    axios.get('http://localhost:8080/api/v1/user').then((response)=>{setUser(response.data);})
}

useEffect(()=>
{
    getUsers()
},[]);



const setNameHandler= (e)=>
{
    setIpName(e.target.value);

}
const setPassHandler= (e)=>
{
    setIpPass(e.target.value);
}

const checkUser=()=>
{
    
        console.log("Valid password");
   const findUser = user.find((u)=>u.name===ipname && u.pass===ippass);
   if(findUser )
   {
    alert('sucessful login');
    cookie.set('userName' , ipname,{expires :1});
    const cookieName = cookie.get('userName');
    console.log(cookieName);
   navigate('/loggedin')
   }
   else
   {
    alert (' failed to login');
   }
}
  return (
    <div>
        <BasicExample></BasicExample>
        <div className='background'>
        <h1 className='heading' > Login </h1>
    <form className='for1'  onSubmit={checkUser}>
    <label className='label1' htmlFor="input1">name :</label>
        <input type="text" name='input1' className='ip1' value={ipname} onChange={setNameHandler} placeholder='enter your name' />
        <br /><br />
        <label className='label1' htmlFor="input2">password :</label>
        <input type="password" name='input2' className='ip2' value={ippass} onChange={setPassHandler} placeholder='Enter Your password'/>
        <button className='sub1' type='submit' >Submit </button>
    </form>
    </div>
    </div>
  )
    }


export default Login