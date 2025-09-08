import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import ListWatches from './ListWatches';
import WatchesLoadersList from './WatchesLoader';


function WatchesItems({ category }) {
  const { watches_items } = useContext(StoreContext);
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
          {watches_items?.map((item, index) => 
            (category === "All" || category === item.category) && (
              <ListWatches
                key={item._id || index}  // ✅ Ensure each key is unique
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
        <WatchesLoadersList/>
        <WatchesLoadersList/>
        <WatchesLoadersList/>
        <WatchesLoadersList/>
          
        </div>
       
          )}
        </div>
      );
    }

export default WatchesItems;
