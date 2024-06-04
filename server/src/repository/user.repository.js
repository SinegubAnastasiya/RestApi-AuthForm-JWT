const pool = require('../db')

const authUserDB = async (email, password) => {
  const client = await pool.connect()

  const sql = 'SELECT * FROM users where email = $1 and password = $2'
  const { rows } = await client.query(sql, [email, password])

  return rows
}

async function createUserDB(name, surname, email, password) {
    const client = await pool.connect()

    const sql = 'insert into users(name, surname, email, password) values($1, $2, $3, $4) returning *'

    const { rows } = await client.query(sql, [name, surname, email, password])

    client.release()
    return rows
}

const getUserDB = async () => {
    const client = await pool.connect();
    const sql = "select * from Users";
    const { rows } = await client.query(sql);
    client.release();
    return rows;
  };
  
const getUserIdDB = async (id) => {
    const client = await pool.connect();
    const sql = "select * from Users where id = $1";
    const { rows } = await client.query(sql, [id]);
    client.release();
    return rows[0];
  };

const updateUserByIdDB = async (id, name, surname, email, password) => {
    const client = await pool.connect();
    const sql = 'UPDATE users SET name = $1, surname = $2, email = $3, password = $4 WHERE id = $5 RETURNING *';
    const { rows } = await client.query(sql, [name, surname, email, password, id]);
    client.release();
    return rows;
}

async function deleteUserDB(id) {
    const client = await pool.connect()

    const sql = 'delete from users where id = $1 returning *'

    const { rows } = await client.query(sql, [id])

    client.release()
    return rows
}

module.exports = { createUserDB, deleteUserDB, getUserDB, getUserIdDB, updateUserByIdDB, authUserDB }