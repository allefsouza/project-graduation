import React from 'react';
import { SectionCart, RemoveItem } from './styled';
import {BsFillCartDashFill} from 'react-icons/bs'


export default function CardCart({name}) {
    
 return (
   <SectionCart>
    <h1>{name}</h1>
    <RemoveItem type='button'><BsFillCartDashFill/></RemoveItem>
   </SectionCart>
 );
}