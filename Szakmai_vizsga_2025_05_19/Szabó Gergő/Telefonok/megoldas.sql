-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok COLLATE utf_hungarian_ci DEFAULT ENCODING UTF8;
-- 3. feladat: samsung tábla létrehozása
CREATE TABLE `telefonok`.`samsung` (`samsungID` INT NOT NULL , `samsung_nev` TEXT NOT NULL , `samsung_max_memoria` TEXT NOT NULL , `samsung_mennyisegi_ar` INT NOT NULL )

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
ALTER TABLE Orders
ADD FOREIGN KEY (samsungID) REFERENCES Persons(samsung_id);
-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése
INSERT INTO iphone (iphoneID, iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES (1, Iphone14, 1TB, 400.000FT)
-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';