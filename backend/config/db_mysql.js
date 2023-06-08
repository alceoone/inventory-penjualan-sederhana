import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_inventory_penjualan'
});
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//     } else {
//         console.log('Database connected');
//     }
// });
export default db;