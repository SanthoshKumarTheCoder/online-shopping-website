import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import ListDress from './ListDress';
import DressLoadersList from './DressLoader';


function DressItems({ category }) {
  const { dress_items } = useContext(StoreContext);
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
         <DressLoadersList/>
         <DressLoadersList/>
         <DressLoadersList  />
         <DressLoadersList />
        </div>
      ) : (
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
          )}
        </div>
      );
    }

export default DressItems;
