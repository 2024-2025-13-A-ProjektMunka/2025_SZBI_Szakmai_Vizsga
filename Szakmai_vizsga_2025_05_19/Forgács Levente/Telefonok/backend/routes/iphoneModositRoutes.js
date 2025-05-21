// Szükséges CommonJS npm-csomagok beimportálása
const express = require('express');
const { pool } = require('../server');

// Szerver szerepkör delegálása route-okra
const router = express.Router();

// iphone-modosit route kezelése
router.put('/', async (req, res) => {
    try {
        const response = await pool.query('UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = Iphone 16');
        
        return res.status(201).json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

module.exports = router;
