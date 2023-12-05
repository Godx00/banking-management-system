import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/adduser/adduserstyles.css';
import 'bootstrap/dist/css/bootstrap.css';
import BasicExample from './CustomNavbar';


const AddUser = () => {
 const baseUrl = 'http://localhost:8080/api/v1/user';
 const navigate = useNavigate();  
 const [name, setName]  =useState();
 const [acNo, setAcNo] = useState();
 const [pass, setPass] = useState();
 
 

 const setNameHandler =(e)=>
 {
  setName(e.target.value);
 }
 const setPassHandler =(e)=>
 {
  setPass(e.target.value);
 }
 const accNoHandler = () =>
 {
  const min = 1000;
  const max = 9999;
  let randomNum = Math.floor(Math.random()*(max-min+1)+min);
setAcNo(randomNum);
  
   
}

const onSubmitHandler= (event)=>
{
  if (pass.length < 8) {
    alert( "Invalid password: Password must be at least 8 characters long.");
  } 
  else if (!/\d/.test(pass)) {
    alert ("Invalid password: Password must include at least one digit.");
  } else if (!/[\W_]/.test(pass)) {
    alert( "Invalid password: Password must include at least one special character.");
  }
  else {
  event.preventDefault();
  axios.post(baseUrl,{ name: name, pass:pass, acNo:acNo}).then((response)=> {alert('User added'); }).catch(error=>{alert('error :'+ error) ;navigate('/login')});
  navigate('/login')
}
}

    return (
    <div>
      <BasicExample></BasicExample>
      <div className='myComponentContainer '>
        <h1 style={{color:'white', fontWeight:'bold'}}> Register </h1>

        <form  onSubmit={onSubmitHandler}>
        <div className='form1 container'>
        <label htmlFor="input1">name :</label>
        <input type="text" name='input1' className="input1 form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={name} onChange={setNameHandler} placeholder='enter your name' />
        <br /><br />
        <label htmlFor="input2">password :</label>
        <input type="text" name='input2' className="input1 form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={pass} onChange={setPassHandler} placeholder='Enter Your password'/>
        
        <br /><br />
        <button type='button' className='btn btn-warning' onClick={accNoHandler}> Get account no</button>
        <br /><br />
       <input value={acNo} className="input12 form-control " aria-label="Default disabled" disabled aria-describedby="inputGroup-sizing-default" placeholder={acNo} />
       </div>
        <br /><br />
        <button className='btn btn-warning' type='submit' >Submit</button>
        </form>
        </div>
    </div>
  )
}

export default AddUser