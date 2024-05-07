const sqlite3 = require("sqlite3").verbose();
const dbPath = "../db/teste1.db";
// Função para abrir conexão com o banco de dados

function openDbConnection() {
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    }
  });
  return db;
}

// Função para buscar todos os clientes
function getAllProdutos(callback) {
  const db = openDbConnection();
  db.all("SELECT * FROM produtos", [], (err, rows) => {
    db.close();
    callback(err, rows);
  });
}

// Função para buscar um cliente por ID
function getProdutosById(id, callback) {
  const db = openDbConnection();
  db.get("SELECT * FROM produtos WHERE id = ?", [id], (err, row) => {
    db.close();
    callback(err, row);
  });
}

// Função para criar um novo cliente
function createProdutos(cliente, callback) {
  const { nome, cpf, email, telefone } = cliente;
  const db = openDbConnection();
  db.run(
    "INSERT INTO produtos (nome, peso, preco) VALUES (?, ?, ?, ?)",
    [nome, cpf, email, telefone],
    function (err) {
      db.close();
      callback(err, { id: this.lastID });
    }
  );
}

// Função para atualizar um cliente existente
function updateProdutos(id, cliente, callback) {
  const { nome, cpf, email, telefone } = cliente;
  const db = openDbConnection();
  db.run(
    "UPDATE produtos SET nome = ?, peso = ?, preco = ? WHERE id = ?",
    [nome, cpf, email, telefone, id],
    function (err) {
      db.close();
      callback(err, { changes: this.changes });
    }
  );
}
// Função para deletar um cliente
function deleteProdutos(id, callback) {
  const db = openDbConnection();
  db.run("DELETE FROM produtos WHERE id = ?", [id], function (err) {
    db.close();
    callback(err, { changes: this.changes });
  });
}

module.exports = {
  getAllProdutos,
  getProdutosById,
  createProdutos,
  updateProdutos,
  deleteProdutos,
};
