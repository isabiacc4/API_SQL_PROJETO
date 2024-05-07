// app.js
const express = require("express");
const app = express();
const port = 3000;


// Middleware(COMPONENTE DO EXPRESS QUE AJUDA NA FUNCIONALIDADE) para analisar o corpo das requisições em JSON
app.use(express.json());

// Importando as rotas do cliente
const produtoRoutes = require("./Router/produtoRoutes");

// Usando as rotas do cliente com o prefixo '/clientes'
app.use("/produtos", produtoRoutes);

// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
