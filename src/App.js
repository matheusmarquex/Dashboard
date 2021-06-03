import {useState} from 'react'
import './App.css';   

import Navbar from './components/nav bar/Navbar';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
  
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={closeSidebar}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default App;
