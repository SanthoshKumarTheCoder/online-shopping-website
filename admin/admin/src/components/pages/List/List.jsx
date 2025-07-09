import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import Listitem from '../../Sidbar/Listitem';


function List({url}) {

  
  const [list, setList] = useState([]);

  const fetchList = async () => {
      const response = await axios.get(`${url}/api/item/list`);
      if(response.data.success){
         setList(response.data.data)
      }
      else{
       toast.error("Error")
      }
  }
  const removeFood=async(foodId)=>{
   const response= await axios.post(`${url}/api/item/remove`,{id:foodId});
   await fetchList();
   if(response.data.success){
    toast.success(response.data.message)
   }
   else{
    toast.error("Error")
   }
  }
  useEffect(()=>{
    fetchList();
  },[])

  return (<div>
    <Listitem/>
    <div className='list add flex-col'>
      <p>All  List</p>
      <div className="list-table">
 <div className="list-table-format title">
  <b>Image</b>
  <b>Name</b>
  <b>Category</b>
  <b>orginal Price</b>
  <b> old Price</b>
  <b>Action</b>
 </div>
 {list.map((item,index)=>{
    return (
      <div key={index} className='list-table-format'>
        <img src={`${url}/images/`+item.image} alt=''/>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>${item.price}</p>
        <p>${item.price_1}</p>
        <p onClick={()=>removeFood(item._id)} className='cursor'>x</p>
      </div>
    )
 })}
      </div>
     
    </div></div>
  )
}

export default List