import React from 'react';
import { CardPizza } from './styled';

export default function Card({nome}) {
 return (
   <CardPizza>
        {nome}
   </CardPizza>
 );
}