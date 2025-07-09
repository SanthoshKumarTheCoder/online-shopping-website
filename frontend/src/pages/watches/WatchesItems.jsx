import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import ListWatches from './ListWatches';
import WatchesLoadersList from './WatchesLoader';


function WatchesItems({ category }) {
  const { watches_items } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
   
    <div className='display' >
        {loading ? (
        // ✅ Improved: Responsive Grid for Loader
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
      ) : (
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
          )}
        </div>
      );
    }

export default WatchesItems;
