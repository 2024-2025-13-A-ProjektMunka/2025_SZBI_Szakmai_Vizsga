// Szükséges CommonJS npm-csomagok beimportálása
const express = require('express');
const { pool } = require('../server');

// Szerver szerepkör delegálása route-okra
const router = express.Router();

// iphone-leker route kezelése
router.get('/', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM iphone;');

        return res.status(201).json({ msg: 'Sikeres lekérés!', response });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

module.exports = router;
