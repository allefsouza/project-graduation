import React, { useEffect, useState } from 'react';
import axios from "axios"
import Card from '../card/card';


export function Cards ({pizzas}){
    const [todasPizzas, setTodasPizzas] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3003/allpizzas").then((data)=>{
            setTodasPizzas(data.data)
        })
    },[])
   return (
    <div>
        {todasPizzas.map((elem)=><Card key={elem.id} nome={elem.nome}/>)}
    </div>
   )
}