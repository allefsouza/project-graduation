import React, { useContext } from 'react';
import { ButtonClose, ButtonConfirm, Input, ModalContent, ModalWrapper, Title, Form, Label, Select  } from './styled';
import AppContext from '../../context/AppContext';
import axios from 'axios';
import { ErrorModal } from '../../hooks/ErrorModal';



export default function OrderForm({ visible, onClose, onFormSubmit, cart }) {

    const {formData, setFormData, cartItems, phoneError, setPhoneError} = useContext(AppContext)
    
    const handleInputChange = (e) => {
        const { id, name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id || name]: value,
        }));
      };

      const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Criar o cliente
          const clientData = {
            name: formData.name,
            phone: formData.phone,
            payment: formData.payment,
            address: formData.address,
            number: formData.number,
            complement: formData.complement,
          };
          
      
          const clientResponse = await axios.post('http://localhost:3003/createClient', clientData);
          console.log('Cliente criado com sucesso:', clientResponse.data);
      
          // Capturar o id do cliente da resposta
          const id_cliente = clientResponse.data.id;
      
          // Verificar se o id_cliente foi obtido corretamente
          if (id_cliente) {
            // Criar o pedido associado ao cliente
            const orderData = {
              id_cliente,
              pizzas: cartItems.map(item => ({
                id: item.id,
                nome: item.nome,
                preco: item.preco,
                ingredientes: item.ingredientes
              })),
            };
            console.log('Dados do pedido:', orderData);
            const orderResponse = await axios.post('http://localhost:3003/createorder', orderData);
            console.log('Pedido criado com sucesso:', orderResponse.data);
      
            // Chamar a função onFormSubmit para atualizar o estado do pedido
            onFormSubmit(orderResponse.data);
      
            // Fechar o modal
            onClose();
          } else {
            console.error('ID do cliente não obtido corretamente.');
          }
        } catch (error) {
          if (error.response && error.response.status === 400 && error.response.data.message === 'Cliente com este número de telefone já existe.') {
            setPhoneError(true); // Configura o estado de erro do telefone
          }
          console.error('Erro ao criar cliente ou pedido:', error);
        }
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
        {phoneError && <ErrorModal message="Cliente com este número de telefone já existe." onClose={() => setPhoneError(false)} />}
      </ModalContent>
    </ModalWrapper>
);
}