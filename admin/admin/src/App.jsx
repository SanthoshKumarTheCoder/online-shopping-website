import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidbar from './components/Sidbar/Slidbar'
import Navbar from './components/Navbar/Navbar';
import Add from './components/pages/Add/Add';
import List from './components/pages/List/List';
import Order from './components/pages/order/Order';
import Shoes from './components/pages/Add/Shoes';
import Item from './components/Sidbar/Item';
import Shoeslist from './components/pages/List/Shoeslist';
import Listitem from './components/Sidbar/Listitem';
import DressCollections from './components/pages/Add/DressCollections';
import Menscollection from './components/pages/Add/Menscollection';
import DressList from './components/pages/List/DressList';
import MensList from './components/pages/List/MensList';

function App() {
   const url="https://ba-ua9j.onrender.com"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidbar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/item" element={<Item/>}/>
          <Route path="/shoesitem" element={<Listitem/>}/>
          <Route path="/addshoes" element={<Shoes url={url}/>}/>
          <Route path="/dressItemUpload" element={<DressCollections url={url}/>}/>
          <Route path="/menItemUpload" element={<Menscollection url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/shoeslist" element={<Shoeslist url={url}/>}/>
          <Route path="/dresslistitem" element={<DressList url={url}/>}/>
          <Route path="/watcheslistitem" element={<MensList url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
