import { useEffect, useState } from "react";



export default function cart(){
const [cartitem,setcartitem]=useState([]);

const useProducts = (cart) =>{
    useEffect(()=>{
        getcart().then(res=>{
             setcartitem(res.products)
        })
    })
   return(
    <div className="carttt">
<table columns={[{
    title:'Title',
    dataIndex:'title'
},{
    title:'Quantity',
    dataIndex:'title'
},{
    title:'Price',
    dataIndex:'title'
},{
    title:'Total',
    dataIndex:'title'
}
]}/>
</div>
   )
}
}