import express from "express"
import cors from "cors"
import ping from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";
import { GetAllClients } from "./endpoints/allClients";
import { getAllPizzas } from "./endpoints/allPizzas";
import { createOrders } from "./endpoints/createOrders";
import { getAllPrices } from "./endpoints/allPrices";


const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003,()=>{
    console.log("servidor rolando na porta 3003")
})

app.get("/ping",ping)

//Add Cliente
app.post("/client",createClient)

// return all clients
app.get("/allclients",GetAllClients)

/// Return all pizzas
app.get("/allpizzas",getAllPizzas)

// Create Orders
app.post("/createorder", createOrders)

// Return All Prices

app.get("/allprices", getAllPrices)