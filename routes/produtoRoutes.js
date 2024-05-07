const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController');
// lembrando que a rota raiz tem clientes, definido no app.js

// Rota para obter todos os clientes
router.get('/', produtoController.getAllProdutos);
// Rota para obter um único cliente pelo ID
router.get('/:id', produtoController.getProdutosById);
// Rota para criar um novo cliente
router.post('/', produtoController.createProdutos);
// Rota para atualizar um cliente existente
router.put('/:id', produtoController.updateProdutos);
// Rota para deletar um cliente
router.delete('/:id', produtoController.deleteProdutos);

module.exports = router;