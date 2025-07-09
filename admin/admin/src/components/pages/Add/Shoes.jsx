import React, {  useState } from 'react'
import { assets } from '../../../assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';
import Item from '../../Sidbar/item';

function Shoes({url}) {


    const [image,setImage] =useState(false);
    const [data,setData] =useState({
        name:"",
        description:"",
        price:"",
        price_1:"",
        category:"Men High Top Sneakers"
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
   
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("price_1", Number(data.price_1));
        formData.append("category",data.category);
        formData.append("image",image);
        const response = await axios.post( `${url}/api/item/addshoes`,formData);
        if(response.data.success){
            setData({
        name:"",
        description:"",
        price:"",
        price_1:"",
        category:"Men High Top Sneakers"
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
       toast.error(response.data.message)
        }
    }
    
  return (
    <div>
    <Item/>
    <div className='add'>
    <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div> 
        <div className='add-product-name flex-col'>
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here'/>
        </div>
        <div className='add-product-description flex-col'>
            <p>Product Description</p>
            <textarea  onChange={onChangeHandler} value={data.description} name='description'  rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className='add-category-price'>
        <div className='add-category flex-col'>
            <p>product category</p>
            <select  onChange={onChangeHandler}  name='category'>
                <option value="Men High Top Sneakers">Men High Top Sneakers</option>
                <option value="Men Low Top Sneakers">Men Low Top Sneakers</option>
                <option value="Men Sliders">Men Sliders</option>
                <option value="Women Lace Up Shoes">Women Lace Up Shoes</option>
                <option value="Women Low Top Sneakers">Women Low Top Sneakers</option>
            </select>
        </div>
        <div className='add-product-price flex-col'>
            <p>Product orginal Price</p>
            <input   onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='20$'/>
        </div>
        <div className='add-product-price flex-col'>
            <p>Product old Price</p>
            <input   onChange={onChangeHandler} value={data.price_1} type='Number' name='price_1' placeholder='20$'/>
        </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
         </form>
      
    </div></div>
  )
}

export default Shoes