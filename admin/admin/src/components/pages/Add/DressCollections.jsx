import React, {  useState } from 'react'
import { assets } from '../../../assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';
import Item from '../../Sidbar/Item';

function DressCollections({url}) {


    const [image,setImage] =useState(false);
    const [data,setData] =useState({
        name:"",
        description:"",
        price:"",
        price_1:"",
        category:"Trendy Ethnic Wear"
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
        const response = await axios.post( `${url}/api/item/dressItemUpload`,formData);
        if(response.data.success){
            setData({
        name:"",
        description:"",
        price:"",
        price_1:"",
        category:"Trendy Ethnic Wear"
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
       toast.error(response.data.message)
        }
    }
    
  return (
    <div >
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
                <option value="Trendy Ethnic Wear">Trendy Ethnic Wear</option>
                <option value="Traditional Dresses">Traditional Dresses</option>
                <option value="Anarkali Dresses">Anarkali Dresses</option>
                <option value="Traditional Half Saree">Traditional Half Saree</option>
                <option value="Sarees Collection">Sarees Collection</option>
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

export default DressCollections
