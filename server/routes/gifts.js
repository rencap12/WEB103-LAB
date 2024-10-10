import express from 'express'
import path from 'path'
import GiftsController from '../controllers/gifts.js'
import { fileURLToPath } from 'url'

const router = express.Router();

router.get('/gifts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM games'); // Replace 'games' with your table name
        res.json(result.rows); // Send back the rows as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
  });

  export default router;
