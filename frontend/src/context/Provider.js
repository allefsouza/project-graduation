import React, { useState } from "react";
import propTypes from "prop-types";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedPizzaSize, setSelectedPizzaSize] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    payment: "",
    address: {
    number: "",
    complement: "",
    },
  });
  

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    selectedPizzaSize,
    setSelectedPizzaSize,
    isModalVisible,
    setIsModalVisible,
    formData,
    setFormData,
    phoneError, 
    setPhoneError
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
