
import './App.css';
import AddUser from './components/AddUser';
import BasicExample from './components/CustomNavbar';
import HomePage from './components/HomePage';
import LoggedIn from './components/LoggedIn';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/loggedin' element={<LoggedIn></LoggedIn>}></Route>
      <Route path='/register' element= {<AddUser></AddUser>}></Route>
      <Route path='/navbar' element= {<BasicExample></BasicExample>}></Route>
      <Route path='/' element={<HomePage></HomePage>}></Route>
     </Routes>
    </div>
  );
}

export default App;
