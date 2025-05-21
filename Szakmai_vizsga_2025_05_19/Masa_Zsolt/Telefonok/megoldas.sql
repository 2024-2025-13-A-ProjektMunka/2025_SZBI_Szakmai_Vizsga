-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

-- 3. feladat: samsung tábla létrehozása
CREATE TABLE samsung (
samsungID int (11) NOT null AUTO_INCREMENT,
 samsung_nev varchar (11) NOT NULL,
  samsung_max_memoria int (11) NOT null,
   samsung_mennyisegi_ar int(255) NOT null,
    PRIMARY KEY (samsungID)
);

-- 4. feladat: vasarlasok tábla létrehozása
CREATE TABLE vasarlasok (
    vasarlasID int(11) NOT NULL AUTO_INCREMENT,
    samsung_ID int(11),
    samsung_mennyiseg int(11) NOT NULL,
    iphone_ID int(11),
    iphone_mennyiseg int(11) NOT NULL,
    xiaomi_ID int(11),
    xiaomi_mennyiseg int(11) NOT NULL,
    PRIMARY KEY (vasarlasID)
);

-- 5. feladat: táblák összekötése
ALTER TABLE samsung
(FOREIGN KEY (SamsungID) REFERENCES vasarlasok(samsung_ID)
FOREIGN KEY (iphoneID) REFERENCES vasarlasok(iphone_ID)
FOREIGN KEY (xiaomiID) REFERENCES vasarlasok(xiaomi_ID))

-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése

-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';