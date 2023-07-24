const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'nama_database',
});

// Fungsi untuk mendapatkan data pengguna
const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(results);
    });
  });
};

module.exports = {
  connection,
  getUsers,
};
