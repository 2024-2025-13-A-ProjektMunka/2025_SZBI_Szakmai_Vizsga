// Szükséges CommonJS npm-csomagok beimportálása
const express = require('express');
const path = require('node:path'); // útvonal beállításokhoz
const fsPromises = require('node:fs/promises'); // filekezeléshez
const { pool } = require('../server');

// Szerver szerepkör delegálása route-okra
const router = express.Router();

// feltolt route kezelése
router.post('/', async (req, res) => {
    try {
        const response = await fsPromises.readFile(
            path.resolve(
                __dirname,
                '..',
                'public',
                'data',
                'adatok_xiaomi.json'
            ),
            'utf-8'
        );

        const adatok = await JSON.parse(response);

        for (let i = 0; i < adatok.length; i++) {
            await pool.query(
                'INSERT INTO xiaomi (xiaomi_tipus, xiaomi_max_memoria, xiaomi_mennyisegi_ar) VALUES (?, ?, ?);',
                [
                    adatok[i].nev,
                    adatok[i].xiaomi_max_memoria,
                    adatok[i].xiaomi_mennyisegi_ar,
                ]
            );
        }

        return res.status(201).json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

module.exports = router;
