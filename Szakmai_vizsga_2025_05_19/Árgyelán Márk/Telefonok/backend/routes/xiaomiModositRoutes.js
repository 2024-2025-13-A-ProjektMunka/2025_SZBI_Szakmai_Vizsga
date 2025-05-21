const express = require('express');
const router = express.Router();
const { pool } = require('../server');

router.put('/', async (req, res) => {
    try {
        const { nev, ujAr } = req.body;
        await pool.query(
            'UPDATE xiaomi SET xiaomi_mennyisegi_ar = ? WHERE xiaomi_nev = ?',
            [ujAr, nev]
        );
        res.json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

module.exports = router;