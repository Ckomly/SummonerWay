const mysql = require('mysql');
import { resolve } from 'url';

export default class DbContext {
    Host: string;
    User: string;
    Password: string;
    Database: string;
    Connection: any;
    _Mysql: any;

    constructor() {
        this.Host = 'localhost';
        this.User = 'root';
        this.Password = 'admin';
        this.Database = 'summoners_way';
        this.InitConnection();
    }

    private InitConnection() {
        this.Connection =  mysql.createConnection({
            host: this.Host,
            user: this.User,
            password: this.Password,
            database: this.Database
        });
    }

    public ExecQuery(queryString: string, args = null) {
        return new Promise((resolve, reject) => {
            this.Connect();

            this.Connection.query(queryString, args, (err, rows) => {
                if (err) return reject(err);

                this.Close();

                resolve(rows);              
            });            
        });
    }

    public Connect() {
        return new Promise((resolve, reject) => {
            this.Connection.connect(err => {
                if (err) return reject(err);
                console.log('you are now connected to db');
                resolve();
            });
        })
    }

    public Close() {
        return new Promise((resolve, reject) => {
            this.Connection.end(err => {
                if (err) return reject(err);
                console.log('you are now disconnected from the db');
                resolve();
            });
        });
    }
}