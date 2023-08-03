import React from "react";
import Header from "../../components/headers";
import { ContainerMain } from "../../components/headers/styled";
import {Cards } from "../../components/cards/Card";


export default function Home() {
    return (
        <ContainerMain>
            <Header/>
            <Cards/>
        </ContainerMain>
    )
}