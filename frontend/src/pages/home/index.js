import React from "react";
import Header from "../../components/headers";
import { ContainerMain } from "../../components/headers/styled";
import Footer from "../../components/footer/footer";
import Provider from './../../context/Provider';

export default function Home() {
  return (
    <Provider>
      <ContainerMain>
        <Header />
        <Footer />
      </ContainerMain>
    </Provider>
  );
}
