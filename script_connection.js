const mysql = require('mysql');

//создание конфигурации

const conn = mysql.createConnection( {
    host: "adm_db",
    user: "Ruslan",
    database: "adm",
    password: "1234567890"
});

conn.connect(err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Database ---- OK');
    }
});
