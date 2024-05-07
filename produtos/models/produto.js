const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor(dbFilePath) {
        this.db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                console.error('Erro ao abrir o banco de dados: ', err.message);
            } else {
                console.log('Conectado ao banco de dados SQLite');
            }
        });
    }
}

module.exports = Database;