-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_hungarian_ci;

-- 3. feladat: samsung tábla létrehozása
CREATE TABLE `samsung` (
  `samsungID` int(100) NOT NULL,
  `samsung_nev` varchar(100) NOT NULL,
  `samsung_max_memoria` varchar(100) NOT NULL,
  `samsung_mennyisegi_ar` int(11) NOT NULL
)

CREATE TABLE `iphone` (
  `iphoneID` int(100) NOT NULL,
  `iphon_nev` varchar(100) NOT NULL,
  `iphon_max_memoria` varchar(100) NOT NULL,
  `iphone_mennyisegi_ar` int(11) NOT NULL
)

CREATE TABLE `xiaomi` (
  `xiaomiID` int(100) NOT NULL,
  `xiaomi_nev` varchar(100) NOT NULL,
  `xiaomi_max_memoria` varchar(100) NOT NULL,
  `xiaomi_mennyisegi_ar` int(11) NOT NULL
)
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
ADD FOREIGN KEY (samsung_ID) REFERENCES samsung(samsung_ID);

ALTER TABLE vasarlasok
ADD FOREIGN KEY (iphone_ID) REFERENCES iphone(iphone_ID);

ALTER TABLE vasarlasok
ADD FOREIGN KEY (xiaomi_ID) REFERENCES xiaomi(xiaomi_ID);
-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('1', 'S3', '32', '140000');

INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('1', 'Iphone 13 Pro', '64', '320000');

INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('1', 'Bingcsilling', '124', '120000');
-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}'; 