import logo from './logo.svg';
import './App.css';
import Dashboard from './Container/Dashboard';
import Navbar from './Container/Navbar';
import Sidebar from './Container/Sidebar';
import JSON from "./Container/JSON.json"
import { useEffect, useState } from 'react';
import Footer from './Container/Footer';

function App() {
  const [data,setData]=useState({})
  const Data = () => {
    JSON.tasks.map((task)=>{
      setData(task)
    })
  }

  useEffect(() => {
  Data()
  }, [])
  
  return (
 <>
 <Navbar/>
 <Sidebar/>
 <Dashboard data={data}/>
 <Footer/>
 </>
  )
}

export default App;
