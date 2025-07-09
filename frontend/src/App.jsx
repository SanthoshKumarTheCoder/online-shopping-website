import './App.css'
import { Route,BrowserRouter as  Router, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop';
import Watches from './pages/watches/Watches';
import Dress from './pages/dress/Dress';
import Card from './pages/Card/Card';
import Fav from './pages/Fav/Fav';
import Shoes from './pages/shoes/Shoes';
import PlaceOrder from './pages/Card/PlaceOrder';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ItemDeatiles from './pages/displayItem/ItemDeatiles';
import ShoesItemDeatiles from './pages/shoes/ShoesItemDeatiles';
import OAuthSignInPage from './components/Loginpopup/Login';
import Store from './components/Footer/Store';
import NewCollection from './components/Footer/NewCollection';
import WomensCollerction from './components/Footer/WomensCollerction';
import Mensfooter from './components/Footer/Mensfooter';
import Bagfooter from './components/Footer/Bagfooter';
import Footwarefooter from './components/Footer/Footwarefooter';
import Privacy from './components/Footer/Privacy';
import Terms from './components/Footer/Terms';
import UserInfo from './components/Loginpopup/UserInfo';
import Verify from './pages/Card/Verify';
import MyOrders from './pages/Card/MyOrders';




function App() {
  // const notify = () => toast("Wow! This is a toast notification!");

  return (
    <>
     <div>
     {/* <button onClick={notify}>Show Toast</button> */}
     <ToastContainer />
      <Navbar/>
      <br></br><br></br>
      <div className='nav-top-padd'>
        <br></br>
      </div>
   <ScrollToTop />
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path="/item/:id" element={<ItemDeatiles />} />
    <Route path="/item/:id" element={<ShoesItemDeatiles />} />
    <Route path='/watches' element={<Watches/>}/>
    <Route path='/shoes' element={<Shoes/>}/>
    <Route path='/dress' element={<Dress/>}/>
    <Route path='/Card' element={<Card/>}/>
    <Route path='/Favorite Items' element={<Fav/>}/>
    <Route path='/Placeorder' element={<PlaceOrder/>}/>
    <Route path='/Login' element={<OAuthSignInPage/>}/>
     <Route path='/Store' element={<Store/>}/>
     <Route path='/NewCollection' element={<NewCollection/>}/>
     <Route path='/WomensCollerction' element={<WomensCollerction/>}/>
     <Route path='/Mensfooter' element={<Mensfooter/>}/>
     <Route path='/Bagfooter' element={<Bagfooter/>}/>
     <Route path='/Footwarefooter' element={<Footwarefooter/>}/>
     <Route path='/privacy' element={<Privacy/>}/>
     <Route path='/terms' element={<Terms/>}/>
     <Route path='/userinfo' element={<UserInfo/>}/>
     <Route path='/verify' element={<Verify/>}/>
     <Route path='/myorder' element={<MyOrders/>}/>
   </Routes>
   </div>
  <Footer/>
    </>
  )
}

export default App
