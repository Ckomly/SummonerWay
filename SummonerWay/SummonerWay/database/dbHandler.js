"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
class DbContext {
    constructor() {
        this.Host = 'localhost';
        this.User = 'root';
        this.Password = 'admin';
        this.Database = 'summoners_way';
        this.InitConnection();
    }
    InitConnection() {
        this.Connection = mysql.createConnection({
            host: this.Host,
            user: this.User,
            password: this.Password,
            database: this.Database
        });
    }
    ExecQuery(queryString, args = null) {
        return new Promise((resolve, reject) => {
            this.Connect();
            this.Connection.query(queryString, args, (err, rows) => {
                if (err)
                    return reject(err);
                this.Close();
                resolve(rows);
            });
        });
    }
    Connect() {
        return new Promise((resolve, reject) => {
            this.Connection.connect(err => {
                if (err)
                    return reject(err);
                console.log('you are now connected to db');
                resolve();
            });
        });
    }
    Close() {
        return new Promise((resolve, reject) => {
            this.Connection.end(err => {
                if (err)
                    return reject(err);
                console.log('you are now disconnected from the db');
                resolve();
            });
        });
    }
}
exports.default = DbContext;
//# sourceMappingURL=dbHandler.js.map