
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans  from './Pages/Vans/Vans';
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"

import VanDetail from './Pages/Vans/VanDetail';
import Layout from './Components/Layout';
import HostLayout from './Components/HostLayout'
import AuthRequired from './Components/AuthRequired';


import './App.css';
import '/server.js';
import HostVans from './Pages/Host/Vans';
import HostVansDetails from './Pages/Host/HostVansDetails';
import HostVanInfo from './Pages/Host/HostVanInfo';
import HostVanPrice from './Pages/Host/HostVanPrice';
import HostVanPhoto from './Pages/Host/HostVanPhoto';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';

  

function App() {



  return (
  <BrowserRouter>

 
  <Routes>
    <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='/vans/:id' element={<VanDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    

    <Route element={<AuthRequired/>}> 

    <Route path="host" element={<HostLayout/>}>
       <Route index element={<Dashboard/>}/>
       <Route path="income" element={<Income/>}/>
      <Route path="review" element={<Reviews/>}/>
      <Route path="vans" element={<HostVans/>}/>
      <Route path="vans/:id" element={<HostVansDetails/>}>
      <Route index element={<HostVanInfo/>}/>
      <Route path='pricing' element={<HostVanPrice/>}/>
      <Route path='photos' element={<HostVanPhoto/>}/>
      </Route>
    </Route>
    </Route>
    
    <Route path='*' element={<PageNotFound/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
      
  )
}

export default App
