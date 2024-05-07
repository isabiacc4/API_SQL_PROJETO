// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware(COMPONENTE DO EXPRESS QUE AJUDA NA FUNCIONALIDADE) para analisar o corpo das requisições em JSON
app.use(express.json());

// Importando as rotas do produto
const produtoRoutes = require("./routes/produtoRoutes");
app.use("/produtos", produtoRoutes);

// Importando as rotas do cliente
const clienteRoutes = require("./routes/clienteRoutes");
app.use("/clientes", clienteRoutes);


// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
