import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import Listitem from './Listitem';
import ProductLoadersList from "./ItemLoader";

function Items({category}) {
  const { list_items } = useContext(StoreContext);
    const [isBackendReady, setIsBackendReady] = useState(false);
  
    useEffect(() => {
      // Replace this with your actual backend health check route
      fetch("https://ba-ua9j.onrender.com") 
        .then(() => {
          setIsBackendReady(true);
        })
        .catch(() => {
          setIsBackendReady(false);
        });
    }, []);
  
  return (
    <div className='display' >
        {isBackendReady ? (
        // ✅ Improved: Responsive Grid for Loader
       <div className="display-list">
        {list_items.map((item,index)=>{
          if (category==="All" || category===item.category) {
            return <Listitem key={index} id={item._id} name={item.name}  price_1={item.price_1} price={item.price} description={item.description} image={item.image}/>
          }
        })}
      </div>
      ) : (
         <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
          }}
        >
          <ProductLoadersList />
          <ProductLoadersList />
          <ProductLoadersList />
          <ProductLoadersList />
          
        </div>
      )}
    </div>
  )
}

export default Items
