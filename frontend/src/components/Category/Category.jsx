
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();

  // Function to navigate to the dress category page
  const goToDress = () => {
    navigate('/dress'); 
  };
  // Function to navigate to the shoes category page
  const goToShoes = () => {
    navigate('/shoes');
  };
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <div data-aos="zoom-in"  className='category '>
      <div className='category-heading'>
        <p>MADE THE HARD WAY</p>
        <h2>FEATURED CATEGORIES</h2>
        <h6>santhosh store  is a powerful eCommerce. Visit our shop page to see all main features for Your Store</h6>
      </div>
      <div className='category-img container'>
      <Link to="/shop">  <img className='category-img-44' src='/cat-bag-5_1296x.webp' alt=''/>
      </Link>
        <div className='category-img-1'>
          <img onClick={goToDress} className='category-img-11' src='/wooman-cat_670x.webp' alt=''/>
         <img onClick={goToShoes}  className='category-img-11' src='/boot-category-1-3-min_670x.webp' alt=''/>
        </div>
        <Link to="/watches">   <img className='category-img-45' src='/menn.avif' alt=''/></Link>

      </div>
      <br/>
    </div>

  )
}

export default Category

