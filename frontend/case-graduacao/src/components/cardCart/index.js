import React, { useContext } from 'react';
import { SectionCart, RemoveItem } from './styled';
import {BsFillCartDashFill} from 'react-icons/bs'
import AppContext from '../../context/AppContext';


export default function CardCart({id, name, price}) {
  const {cartItems, setCartItems} = useContext(AppContext)
     
  const handleRemoveItem = ()=>{
      const updateItems = cartItems.filter((item)=> item.id !== id);
      setCartItems(updateItems)
    };
 return (
   <SectionCart>
    <h1>{name}</h1>
    <p>R${price}</p>
    <RemoveItem type='button' onClick={handleRemoveItem} ><BsFillCartDashFill/></RemoveItem>
   </SectionCart>
 );
}