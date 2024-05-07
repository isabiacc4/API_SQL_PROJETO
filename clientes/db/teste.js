//importa o pacote "sqlite3" e habilita o modo verbose(permite usar todos os comandos do sqlite) para mensagens detalhadas de log
const sqlite3 = require("sqlite3").verbose();

//cria uma nova conexão com o banco de dados, que será criado no arquivo 'teste1.db' se não existir
const db = new sqlite3.Database('./teste1.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.log('Erro ao abrir o banco de dados: ', err.message);
    }
    console.log('Conectado ao banco de dados SQLite!')
})