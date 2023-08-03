import React from "react"
import { ContainerHeader, Start, IMG, SecondDiv, DivHorario, DivMetodos, DivName, Input, Title } from "./styled"
import ppl from "../../assets/imgs/ppl.png"
import logo from "../../assets/imgs/logoCenter.png"
import credit from "../../assets/imgs/credit_card.png"
import clock from "../../assets/imgs/clock.png"
import plus from "../../assets/imgs/plus_circle.png"



export default function Header (){
   

    return (
        <div>
            <ContainerHeader> 
                <Start>   
                    <img src={ppl}/>
                    <label>Entrar</label>
                </Start>
                <IMG src={logo}/>
            </ContainerHeader>
            <SecondDiv>
                    <DivName>
                        <h1>PIZZAS E MASSAS</h1>
                        <p>Rua Ficticia de Abreu,502 - Jd Nada Ve - São josé dos pinhais</p>
                    </DivName>    
                    <DivHorario>
                        <div>
                            <p>Entrega</p>
                            <p>45min - 1h 0min</p>
                        </div>
                        <div>
                            <p>Retirada</p>
                            <p>30min</p>
                        </div>
                    </DivHorario>
                    <DivMetodos>
                        <div>
                            <p>Pagamentos</p>
                            <img src={credit}/>
                        </div>
                        <div>
                            <p>Horários</p>
                            <img src={clock}/>
                        </div>
                        <div>
                            <p>Informações</p>
                            <img src={plus}/>
                        </div>
                    </DivMetodos>
            </SecondDiv>
            <Input 
            type="search" 
            aria-labelledby="ion-input-0-lbl" 
            enterKeyHint="search" 
            autoCorrect="off" 
            autoComplete="off" 
            autoCapitalize="off" 
            inputMode="search" 
            placeholder="Pesquisar"/>
            <Title>
                <h2>PIZZAS</h2>
            </Title>
        </div>
    );
}