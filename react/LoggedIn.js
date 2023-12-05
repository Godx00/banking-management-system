import React, { useEffect, useState } from 'react'
import axios from 'axios';
import cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import BasicExample from './CustomNavbar';
import './css/LoggedIn/LoggedIn.css'
const LoggedIn = () => {
const [user,setUser] = useState();
const baseUrl = 'http://localhost:8080/api/v1/user';
const [balance , setBalance] = useState('show balance');
const [name ,setName] = useState();
const [recName, setRecName] = useState('');
const [amount , setAmount] = useState(0);
const [accountNo,  setAccountNo]= useState();

const navigate = useNavigate();
const getUser= ()=>
{
    axios.get(baseUrl).then((response)=>{setUser(response.data)});
}
useEffect(()=>
{
    getUser();
    getUserName();
},[])

const getUserName=()=>
{
    const use1 = cookie.get('userName');
    setName(use1);
}
const amountHandler=(e)=>
{
    setAmount(e.target.value);
}
const recNameHandler=(e)=>
{
    setRecName(e.target.value);
}
const addFunds=()=>
{
const username = cookie.get('userName');   
const userMatch = user.find((u)=> u.name === username);
    if(userMatch)
    {
        const  a = userMatch.name;
        const b = userMatch.acNo;
        const c = userMatch.pass;
        const d = userMatch.recPaid;
        const e = userMatch.recName;
        const bal = parseInt(userMatch.balance)+ parseInt(amount);

        userMatch.balance = bal;
        setBalance(bal);
       
        axios.put(`http://localhost:8080/api/v1/user/${userMatch.id}`, {name: a,balance : bal,pass:c , acNo:b, recPaid:d,recName:e})
      .then((response) => {
        alert('Balance updated successfully');
      }).catch((error)=>{alert(error)});
    }
}

const accNoHandler=(e)=>
{
    setAccountNo(e.target.value);
}


const transferFunds=()=>
{
    const username = cookie.get('userName');   
const userMatch = user.find((u)=> u.name === username);
    
    if(userMatch)
    {
        const  a = userMatch.name;
        const b = userMatch.acNo;
        const c = userMatch.pass;
       
        const bal = parseInt(userMatch.balance)- parseInt(amount);
        userMatch.balance = bal;
        setBalance(bal);
        axios.put(`http://localhost:8080/api/v1/user/${userMatch.id}`, {name: a,balance : bal,pass:c , acNo:b, recPaid:amount,recName:recName})
      .then((response) => {
        alert('Balance updated successfully');
      }).catch((error)=>{alert(error)});

      
    const recName2 = recName;
    const isUser = user.find((u)=> u.name === recName2 );
    if(isUser)
    {
        const  a1 = isUser.name;
        const b1 = isUser.acNo;
        const c1 = isUser.pass;
        const d1 = isUser.recName;
        const e1 = isUser.recPaid;
        const bal = parseInt(isUser.balance)+ parseInt(amount);
        isUser.balance = bal;
        axios.put(`http://localhost:8080/api/v1/user/${isUser.id}`, {balance : bal, name: a1, acNo: b1, pass:c1 , recName:d1 ,recPaid:e1})
        .then((response) => {
          alert('Transfer Sucess');
        }).catch((error)=>{alert(error)});
        
    }
    else
    {
        console.log('No user found')
    }
    }
}

const LogoutHandler=()=>
{
    navigate('/login')
}


const getBalance=()=>
{
    const username = cookie.get('userName');
    const userMatch = user.find((u)=> u.name === username);
    if(userMatch)
    {
       const bal = userMatch.balance;
        setBalance(bal);
        
    }
    else
    {
        console.log('no user found');
    }
}



    return (
    <div>
        
        <BasicExample></BasicExample>
        <div className='bgcolor'>
        <div className='username'>
        <p className='namename'>{name}</p>
        </div>
        <div className='topsegment'>
        <button type='button' className='but2 btn btn-primary' onClick={getBalance}  >{balance}</button>
        <button type='button' className=' logoutbtn but2 btn btn-primary' onClick={LogoutHandler}>LogOut</button>
        </div>
        <div className='addfunds'>
        <button className='but2 btn btn-primary' onClick={addFunds}>addfunds</button>
        <input type="number" name="amount" id="amount" className='inp2' onChange={amountHandler} value={amount} placeholder='ammount' />
        </div>
        <br /><br />
      
        <button type='button' className='but2 btn btn-primary' onClick={transferFunds}>Transfer</button>
        <input type="text" className='inp4' onChange={recNameHandler} value={recName} placeholder='recipient'/>
        
        <input type="text"  className='inp5' onChange={accNoHandler} value={accountNo} placeholder='account no.'/>
        
        
        </div>
       

    </div>
  )
}

export default LoggedIn