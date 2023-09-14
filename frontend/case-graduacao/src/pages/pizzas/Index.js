import React, { useContext } from "react";
import Footer from "../../components/footer/footer";
import HeaderOthersPage from "../../components/headerOthersPage";
import SearchComponent from "../../components/search/search";
import AnimatedCard from "../../components/animetedCard";
import Card from "../../components/card/card";
import AppContext from "../../context/AppContext";

export default function Pizzas() {
  const { cartItems, setCartItems, showDuplicateFlavorPopup, setShowDuplicateFlavorPopup } = useContext(AppContext);
  const handleCardAction = (item) => {
    setCartItems([...cartItems, item])
    console.log(cartItems)
  };
  return (
    <div>
      <HeaderOthersPage title="Sabores" />
      <SearchComponent
        url="http://localhost:3003/allpizzas"
        searchKey="nome"
        itemKey="id"
        itemDisplayKey="nome"
        placeholder="Digite sua pesquisa"
        title="SABORES"
        handleCardAction={handleCardAction}
        renderItem={(item) => (
          <AnimatedCard
            key={item.id}
            item={item}
            handleCardAction={handleCardAction} 
            showDuplicateFlavorPopup={showDuplicateFlavorPopup}
          >
            <Card key={item.id} price={item.preco} name={item.nome} ingredients={item.ingredientes} />
          </AnimatedCard>
        )}
      />
      <Footer />
    </div>
  );
}
