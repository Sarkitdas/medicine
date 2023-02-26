import './medicine.css';
import Data from './data';
import React from 'react';
import { useState } from 'react';


const Medicine = ({addToCart})=>
{
    const [searchTerm,setSearchTerm]=useState("");

    return(
        <>
        <div className='templateContainer'>
            <div className='searchInput_Container'>
                <input id='searchInput' type={Text} placeholder='Search here...'onChange={(event)=> {setSearchTerm(event.target.value);}}/>
            </div>
            <div className='template_Container'>
                        {
                        Data.cardData.filter((val)=>{
                            if(searchTerm===""){
                                return val;
                            }
                            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.shop.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })

                        .map((val)=>{
                            return(
                                <div className='card'>
                            <img src={val.img} alt=''/>
                            <div className='card-body'>
                                <div>
                                    <h5 className='card-title'>{val.title}</h5>
                                    <p>{val.shop}</p>
                                </div>
                                <div>
                            <p className='card-text'>{val.price} Tk</p>
                            </div>
                            <div>
                            <button className="cart" onClick={()=>{addToCart(val)}}>Add cart</button>
                                </div>
                            </div>
                            </div> 
                            )
                        })
                        }

            </div>
        </div>

        </>
    );

}
export default Medicine;