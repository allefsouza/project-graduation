import React, { useContext, useEffect, useState } from 'react';
import { ButtonClose, ButtonConfirm, Input, ModalContent, ModalWrapper, Title, Form, Label, Select } from './styled';
import AppContext from '../../context/AppContext';
import axios from 'axios';
import { ErrorModal } from '../../hooks/ErrorModal';

export default function OrderForm({ visible, onClose, onFormSubmit, cart }) {
  const { formData, setFormData, cartItems, phoneError, setPhoneError } = useContext(AppContext);
  const [existingClients, setExistingClients] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id || name]: value,
    }));
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client);
    setShowForm(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("cartItems", JSON.stringify(formData.cart));
    // console.log('Salvando carrinho no localStorage', formData.cart);

    try {
      // console.log('Dados do formulário:', formData);
      // console.log('Cliente selecionado:', selectedClient);
      if (selectedClient) {
        // Usar o cliente existente para criar o pedido
        const orderData = {
          id_cliente: selectedClient.id_cliente,
          pizzas: cartItems.map((item) => ({
            id: item.id,
            nome: item.nome,
            preco: item.preco,
          })),
        };
        // console.log(orderData)
        const orderResponse = await axios.post('https://project-graduation-backend.vercel.app/createorder', orderData);
        // console.log('Pedido criado com sucesso:', orderResponse.data);

        onFormSubmit(orderResponse.data);
        onClose();
      } else {
        // Criar um novo cliente e usar para criar o pedido
        const clientData = {
          name: formData.name,
          phone: formData.phone,
          payment: formData.payment,
          address: formData.address,
          number: formData.number,
          complement: formData.complement,
        };

        const clientResponse = await axios.post('https://project-graduation-backend.vercel.app/createClient', clientData);
        // console.log('Cliente criado com sucesso:', clientResponse.data);

        const id_cliente = clientResponse.data.id;

        if (id_cliente) {
          const orderData = {
            id_cliente:selectedClient.id,
            pizzas: cartItems.map((item) => ({
              id: item.id,
              nome: item.nome,
              preco: item.preco,
              ingredientes: item.ingredientes,
            })),
          };

          const orderResponse = await axios.post('https://project-graduation-backend.vercel.app/createorder', orderData);
          // console.log('Pedido criado com sucesso:', orderResponse.data);

          onFormSubmit(orderResponse.data);
          onClose();
        } else {
          console.error('ID do cliente não obtido corretamente.');
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'Cliente com este número de telefone já existe.') {
        setPhoneError(true); // Configura o estado de erro do telefone
      }
      console.error('Erro ao criar cliente ou pedido:', error);
    }
  };

  useEffect(() => {
    const fetchExistingClients = async () => {
      try {
        const clientsResponse = await axios.get('https://project-graduation-backend.vercel.app/allclients');
        setExistingClients(clientsResponse.data);
      } catch (error) {
        console.error('Erro ao buscar clientes existentes:', error);
      }
    };

    fetchExistingClients();
  }, []);

 return (
  <ModalWrapper visible={visible}>
  <ModalContent>
    <Title>Informações do Pedido</Title>
    {selectedClient ? (
      <>
        <p>Cliente selecionado: {selectedClient.name}</p>
        <ButtonConfirm onClick={handleFormSubmit}>Finalizar Pedido</ButtonConfirm>
      </>
    ) : (
      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor="client">Escolha um cliente existente:</Label>
        <Select id="client" name="client" onChange={(e) => handleSelectClient(existingClients[e.target.value])}>
          <option value="">Escolha um cliente</option>
          {existingClients.map((client, index) => (
            <option key={index} value={index}>
              {client.name} - {client.phone}
            </option>
          ))}
        </Select>

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

        <ButtonConfirm onClick={handleFormSubmit}>Finalizar Pedido</ButtonConfirm>
      </Form>
    )}
    <ButtonClose onClick={onClose}>Fechar</ButtonClose>
    {phoneError && <ErrorModal message="Cliente com este número de telefone já existe." onClose={() => setPhoneError(false)} />}
  </ModalContent>
</ModalWrapper>

);
}