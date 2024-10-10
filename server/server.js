import express from 'express';
import './config/dotenv.js';
import cors from 'cors';
import giftsRouter from './routes/gifts.js'
import pool from './config/database.js';


const app = express();

app.use(cors());

//app.use('/gifts', giftsRouter)

app.get('/', async (req, res) => {
    try {
        console.log('entering pg database');
        const result = await pool.query('SELECT * FROM games'); // Replace 'games' with your table name
        res.json(result.rows); // Send back the rows as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});