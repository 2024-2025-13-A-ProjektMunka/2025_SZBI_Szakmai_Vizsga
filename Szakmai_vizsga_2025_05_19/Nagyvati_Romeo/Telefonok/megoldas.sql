-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok CHARACTER set utf8mb4 COLLATE utf8mb4_hungarian_ci;
-- 3. feladat: samsung tábla létrehozása
CREATE TABLE `telefonok`.`samsung` (`samsungID` INT(11) NOT NULL AUTO_INCREMENT , `samsung_nev` VARCHAR(255) NOT NULL , `samsung_max_memoria` VARCHAR(255) NOT NULL , `samsung_mennyiseg_ar` INT NOT NULL , PRIMARY KEY (`samsungID`))

CREATE TABLE `telefonok`.`iphone` (`iphoneID` INT(11) NOT NULL AUTO_INCREMENT , `iphone_nev` VARCHAR(255) NOT NULL , `iphone_max_memoria` VARCHAR(255) NOT NULL , `ipohne_mennyiseg_ar` INT NOT NULL , PRIMARY KEY (`iphoneID`));

CREATE TABLE `telefonok`.`xiaomi` (`xiaomiID` INT(11) NOT NULL AUTO_INCREMENT , `xiaomi_nev` VARCHAR(255) NOT NULL , `xiaomi_max_memoria` VARCHAR(255) NOT NULL , `xiaomi_mennyiseg_ar` INT NOT NULL , PRIMARY KEY (`xiaomiID`));


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
ALTER TABLE vasarlasok
ADD FOREIGN KEY (samsung_id)
REFERENCES samsung(samsungID);

ALTER TABLE vasarlasok
ADD FOREIGN KEY (iphone_id)
REFERENCES iphone(iphoneID);

ALTER TABLE vasarlasok
ADD FOREIGN KEY (xiaomi_id)
REFERENCES xiaomi(xiaomiID);
-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése

-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';