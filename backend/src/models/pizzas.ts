export interface Cliente {
  id_cliente?: number; // O id_cliente é opcional, pois será atribuído pelo banco de dados
  name: string;
  phone: number;
  payment: 'credito' | 'debito' | 'dinheiro';
  address: string;
  number: string;
  complement?: string; // Complemento é opcional
}

export interface Pedido {
  id_pedido?: number; // O id_pedido é opcional, pois será atribuído pelo banco de dados
  id_cliente: number; // Chave estrangeira para o cliente
}

export interface TPizza {
  id: number;
  nome: string;
  preco: number;
  ingredientes: string;
}

export interface CreateOrdersResponse {
  orderId: number;
}