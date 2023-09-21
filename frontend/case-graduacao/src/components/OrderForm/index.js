import React, { useContext } from 'react';
import { ButtonClose, ButtonConfirm, Input, ModalContent, ModalWrapper, Title, Form, Label, Select  } from './styled';
import AppContext from '../../context/AppContext';


export default function OrderForm({ visible, onClose, onFormSubmit, cart }) {

    const {formData, setFormData} = useContext(AppContext)

    const handleInputChange = (e) => {
        const { id, name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id || name]: value,
        }));
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const orderId = `order_${Math.floor(Math.random() * 10000)}`;
        const formDataWithCart = {
            id: orderId,
            ...formData,
            cart,
          };
        onFormSubmit(formDataWithCart);
        onClose();
      };
    

 return (
    <ModalWrapper visible={visible}>
      <ModalContent>
        <Title>Informações do Pedido</Title>
        <Form onSubmit={handleFormSubmit}>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" id="name" name="name" onChange={handleInputChange} />

          <Label htmlFor="phone">Telefone:</Label>
          <Input type="text" id="phone" name="phone" onChange={handleInputChange} />

          <Label htmlFor="payment">Forma de pagamento:</Label>
          <Select id="payment" name="payment" onChange={handleInputChange}>
            <option>Forma de pagamento</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
            <option value="dinheiro">Dinheiro</option>
          </Select>

          <Label htmlFor="address">Endereço:</Label>
          <Input type="text" id="address" name="address" onChange={handleInputChange} />

          <Label htmlFor="number">Número:</Label>
          <Input type="text" id="number" name="number" onChange={handleInputChange} />

          <Label htmlFor="complement">Complemento:</Label>
          <Input type="text" id="complement" name="complement" onChange={handleInputChange} />
        </Form>
        <ButtonConfirm onClick={handleFormSubmit}>Finalizar Pedido</ButtonConfirm>
        <ButtonClose onClick={onClose}>Fechar</ButtonClose>
      </ModalContent>
    </ModalWrapper>
);
}