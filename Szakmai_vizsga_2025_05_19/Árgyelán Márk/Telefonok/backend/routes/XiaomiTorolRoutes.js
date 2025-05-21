const express = require('express');
const router = express.Router();
const { pool } = require('../server');

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM xiaomi WHERE xiaomiID = ?', [id]);
        res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

module.exports = router;