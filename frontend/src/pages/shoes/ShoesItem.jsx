import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import ListShoes from './ListShoes';
import ShoesLoadersList from './ShoesItemLoader';


function ShoesItems({ category }) {
  const { shoes_items } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // ✅ Debugging: Ensure `shoes_items` has data
  console.log("Shoes Items:", shoes_items);

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
          <ShoesLoadersList/>
          <ShoesLoadersList/>
          <ShoesLoadersList/>
          <ShoesLoadersList/>
          
        </div>
      ) : (
        <div className="display-list">
          {shoes_items?.map((item, index) => 
            (category === "All" || category === item.category) && (
              <ListShoes 
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

export default ShoesItems;
