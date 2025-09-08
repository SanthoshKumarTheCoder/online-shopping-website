import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import ListDress from './ListDress';
import DressLoadersList from './DressLoader';


function DressItems({ category }) {
  const { dress_items } = useContext(StoreContext);
  // const [loading, setLoading] = useState(true);
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
          <div className="display-list">
          {dress_items?.map((item, index) => 
            (category === "All" || category === item.category) && (
              <ListDress 
                key={item._id || index}  
                id={item._id} 
                name={item.name}  
                price_1={item.price_1} 
                price={item.price} 
                description={item.description} 
                image={item.image} 
                />
              ))}
            </div>
      ) : (
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
          }}
        >
         <DressLoadersList/>
         <DressLoadersList/>
         <DressLoadersList  />
         <DressLoadersList />
        </div>
        // <div className="display-list">
        //   {dress_items?.map((item, index) => 
        //     (category === "All" || category === item.category) && (
        //       <ListDress 
        //         key={item._id || index}  
        //         id={item._id} 
        //         name={item.name}  
        //         price_1={item.price_1} 
        //         price={item.price} 
        //         description={item.description} 
        //         image={item.image} 
        //         />
        //       ))}
        //     </div>
          )}
        </div>
      );
    }

export default DressItems;
