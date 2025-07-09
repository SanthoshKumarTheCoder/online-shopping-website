import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import Listitem from './Listitem';
import ProductLoadersList from "./ItemLoader";

function Items({category}) {
  const { list_items } = useContext(StoreContext);
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
          <ProductLoadersList />
          <ProductLoadersList />
          <ProductLoadersList />
          <ProductLoadersList />
          
        </div>
      ) : (
      <div className="display-list">
        {list_items.map((item,index)=>{
          if (category==="All" || category===item.category) {
            return <Listitem key={index} id={item._id} name={item.name}  price_1={item.price_1} price={item.price} description={item.description} image={item.image}/>
          }
        })}
      </div>)}
    </div>
  )
}

export default Items
