import pg from 'pg';

const config = {
    connectionString: process.env.CONNECTION
};

console.log(config);

const pool = new pg.Pool(config);
export default pool;