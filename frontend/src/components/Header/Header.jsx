// Importing necessary modules and libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay  } from 'swiper/modules'; // Import EffectFade module
import 'swiper/css';
import Button from '@mui/material/Button';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <div  >
      <div className='desktop-home'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // 5 seconds
          disableOnInteraction: false, // Keeps autoplay running even when user interacts
      
        }}
       
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-item-4'>
        <div className='swiper-4'>
       <h2>womens collection</h2>
       <p>Dress to impress, shine with confidence </p>
       <div className='shop-hide-1'>
       <Link to="/dress" className='Shop-123'>   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 40, color: "white", fontSize: '20px' }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 15, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
    <div className='shop-hide'>
    <Link to="/dress">   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link>
    </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-item-1'>
        <div className='swiper-1'>
        <h2>mens  collection</h2>
        <p> Stylish and comfortable men’s formal wear.</p>
        <div className='shop-hide-1'> <Link to="/watches">   <Button variant="contained" disableElevation sx={{  height: 40, color: "white" }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>  <div className='shop-hide'> <Link to="/watches">   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-item-2'>
        <div className='swiper-2'>
       <h2>Footwear</h2>
       <p>Step Into Style </p>
       <div className='shop-hide-1'> <Link to="/shoes">   <Button variant="contained" disableElevation sx={{  height: 40, color: "white" }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div><div className='shop-hide'> <Link to="/shoes">   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-item-3'>
        <div className='swiper-3'>
       <h2>Backpack</h2>
       <p>Carry Style & Carry Confidence</p>
       <div className='shop-hide-1'>  <Link to="/shop">  <Button variant="contained" disableElevation sx={{  height: 40, color: "white" }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div><div className='shop-hide'> <Link to="/shop">  <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
        </div>
        </SwiperSlide>
      </Swiper>

      </div>


      {/* ------------------------------------------------------------------------------------------------------------------------------ */}

       <div className='mobile-home'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // 5 seconds
          disableOnInteraction: false, // Keeps autoplay running even when user interacts
      
        }}
       
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-item-44'>
        <div className='swiper-4'>
       <h2>womens collection</h2>
       <p>Dress to impress, shine with confidence </p>
       <div className='shop-hide-1'>
       <Link to="/dress" className='Shop-123'>   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 40, color: "white", fontSize: '20px' }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 15, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
    <div className='shop-hide'>
    <Link to="/dress">   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link>
    </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-item-11'>
        <div className='swiper-1'>
        <h2>mens  collection</h2>
        <p> Stylish and comfortable men’s formal wear.</p>
        <div className='shop-hide-1'> <Link to="/watches">   <Button variant="contained" disableElevation sx={{  height: 40, color: "white" }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>  <div className='shop-hide'> <Link to="/watches">   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-item-22'>
        <div className='swiper-2'>
       <h2>Footwear</h2>
       <p>Step Into Style </p>
       <div className='shop-hide-1'> <Link to="/shoes">   <Button variant="contained" disableElevation sx={{  height: 40, color: "white" }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div><div className='shop-hide'> <Link to="/shoes">   <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-item-33'>
        <div className='swiper-3'>
       <h2>Backpack</h2>
       <p>Carry Style & Carry Confidence</p>
       <div className='shop-hide-1'>  <Link to="/shop">  <Button variant="contained" disableElevation sx={{  height: 40, color: "white" }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div><div className='shop-hide'> <Link to="/shop">  <Button className='Shop-123' variant="contained" disableElevation sx={{  height: 25, color: "white", fontSize: '6px',width:"95px"  }}>
      Shop Now <Tooltip title="Click to see loading">
      <span>
        <IconButton onClick={() => setLoading(true)} disabled={loading} sx={{ color: "white" }}>
          {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <ShoppingCartIcon sx={{ fontSize: 13, color: "white" }} />}
        </IconButton>
      </span>
    </Tooltip>
    </Button></Link></div>
        </div>
        </SwiperSlide>
      </Swiper>

      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------ */}
             

      <div className='del'>
      <div data-aos="flip-left" className="card" style={{ width: "18rem" }}>
      <div className="card-body delivery-item">
       
        <span class=" delivery-icon material-symbols-rounded">local_shipping</span>
        <p className="delivery-des-1">Quick delivery</p>
        <p className="delivery-des">Inside City delivery within 5 days</p>
      </div>
    </div>
    <div data-aos="flip-left" className="card" style={{ width: "18rem" }}>
      <div className="card-body delivery-item">
      <span class="delivery-icon material-symbols-rounded">shopping_bag</span>
      <p className="delivery-des-1">Pick up in store</p>
      <p className="delivery-des">We have option of pick up in store.</p>
      </div>
    </div>
    <div data-aos="flip-left" className="card" style={{ width: "18rem" }}>
      <div className="card-body delivery-item">
      <span class="delivery-icon material-symbols-rounded">
            featured_seasonal_and_gifts
          </span>
          <p className="delivery-des-1">Special packaging</p>
          <p className="delivery-des">Our packaging is best for products.</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header
