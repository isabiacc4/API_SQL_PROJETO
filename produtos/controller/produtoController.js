//produtoController.js
const Produto = require('../model/produto');
// Controlador para obter todos os produtos
exports.getAllProdutos = (req, res) => {
Produto.getAllProdutos((err, produtos) => {
if (err) {
res.status(500).send(err);
} else {
res.json(produtos);
}
});
};
// Controlador para obter um produto pelo ID
exports.getProdutoById = (req, res) => {
Cliente.getProdutoById(req.params.id, (err, produto) => {
if (err) {
res.status(500).send(err);
} else if (produto) {
res.json(produto);
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}
});
};
// Controlador para criar um novo produto
exports.createProduto = (req, res) => {
Produto.createProduto(req.body, (err, result) => {
if (err) {
res.status(500).send(err);
} else {
res.status(201).json(result);
}
});
};
// Controlador para atualizar um produto existente
exports.updateProduto = (req, res) => {
Produto.updateProduto(req.params.id, req.body, (err, result) => {
if (err) {
res.status(500).send(err);
} else if (result.changes) {
res.status(200).json(result);
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}
});
};
// Controlador para deletar um produto
exports.deleteProduto = (req, res) => {
Produto.deleteProduto(req.params.id, (err, result) => {
if (err) {
res.status(500).send(err);
} else if (result.changes) {
res.status(200).json({ message: 'Produto deletado com sucesso' });
} else {
res.status(404).send({ message: 'Produto não encontrado' });
}
});
};