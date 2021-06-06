import {useState} from 'react'
import './App.css';   

import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {
  
  return (
    <div className="container">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
