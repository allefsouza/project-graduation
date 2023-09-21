export type TPizzas = {
    id: number;
    nome: string;
  };
  
  export type CreateOrderRequest = {
    fk_client: number;
    pizzas: TPizzas[];
  };
  
  export type CreateOrderResponse = {
    orderId: number;
  };