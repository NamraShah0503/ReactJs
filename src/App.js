import './App.css';
import { Header } from './component/Header';
import Footer from './component/Footer';
import { Content } from './component/Content';
import { Users } from './component/Users';
import { Employees } from './employees/Employees';
import { Register } from './forms/Register';
import {Navbar} from './component/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/users/Home';
import { AboutUs } from './component/users/AboutUs';
import { ContactUs } from './component/users/ContactUs';
import { FeedBack } from './component/users/FeedBack';
import { useRoutes } from 'react-router-dom';
import { AddStudent } from './component/students/AddStudent';
import { ListStudents } from './component/students/ListStudents';



function App() {
var payload = "This is payload"

  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/aboutus' element ={<AboutUs/>}></Route>
        <Route path='/contactus' element ={<ContactUs/>}></Route>
        <Route path='/feedback' element ={<FeedBack/>}></Route>
        <Route path='/addStudent' element ={<AddStudent/>}></Route>
        <Route path='/listStudents' element ={<ListStudents/>}></Route>
        
       </Routes>
    </div>
  );
  
}

export default App;
