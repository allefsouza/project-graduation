import express from "express"
import cors from "cors"
import ping from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";
import { getAllClients } from "./endpoints/allClients";
import { getAllPizzas } from "./endpoints/allPizzas";
import { createOrders } from "./endpoints/createOrders";
import { getAllPrices } from "./endpoints/allPrices";
import { getAllOrders } from "./endpoints/allOrders";
import { deleteCliente } from "./endpoints/delClient";
import { deleteOrder } from "./endpoints/delOrders";


const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003,()=>{
    console.log("servidor rolando na porta 3003")
})

app.get("/ping",ping)

//Add Cliente
app.post("/createClient",createClient)

// Return All Clients
app.get("/allclients/:id_cliente?", getAllClients);

/// Return All Pizzas
app.get("/allpizzas/:id?", getAllPizzas);

/// Return All Orders
app.get("/allorders/:id_pedido?", getAllOrders);

// Create Orders
app.post("/createorder", createOrders)

// Return All Prices

app.get("/allprices", getAllPrices)

// Delete Client
app.delete("/clients/:id_cliente", deleteCliente);

// Delete Orders
app.delete('/orders/:id_pedido', deleteOrder);