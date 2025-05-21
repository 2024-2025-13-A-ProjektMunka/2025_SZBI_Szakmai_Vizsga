-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefontok;
-- 3. feladat: samsung tábla létrehozása
CREATE TABLE samsung (
    samsungID int(11) NOT NULL AUTO_INCREMENT,
    samsung_nev varchar(50) NOT NULL,
    samsung_max_memoria varchar(50) NOT NULL,
    samsung_mennyisegi_ar int(11) NOT NULL,
    PRIMARY KEY (samsungID)
);
-- 3. feladat: iphone tábla létrehozása
CREATE TABLE iphone (
    iphoneID int(11) NOT NULL AUTO_INCREMENT,
    iphone_nev varchar(50) NOT NULL,
    iphone_max_memoria varchar(50) NOT NULL,
    iphone_mennyisegi_ar int(11) NOT NULL,
    PRIMARY KEY (iphoneID)
);
-- 3. feladat: xiaomi tábla létrehozása
CREATE TABLE xiaomi (
    xiaomiID int(11) NOT NULL AUTO_INCREMENT,
    xiaomi_nev varchar(50) NOT NULL,
    xiaomi_max_memoria varchar(50) NOT NULL,
    xiaomi_mennyisegi_ar int(11) NOT NULL,
    PRIMARY KEY (xiaomiID)
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
ALTER TABLE vasarlasok
ADD FOREIGN KEY (samsung_ID) REFERENCES samsung(samsungID);

ALTER TABLE vasarlasok
ADD FOREIGN KEY (iphone_ID) REFERENCES iphone(iphoneID);

ALTER TABLE vasarlasok
ADD FOREIGN KEY (xiaomi_ID) REFERENCES xiaomi(xiaomiID);



-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése
INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('1', 'Iphone 13', '256', '289900')
INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('2', 'Iphone 14', '128', '264900');
INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('3', 'Iphone 15', '256', '399900');
INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('4', 'Iphone 16e', '128', '299900');
INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('5', 'Iphone 16', '256', '449900');
INSERT INTO `iphone` (`iphoneID`, `iphone_nev`, `iphone_max_memoria`, `iphone_mennyisegi_ar`) VALUES ('6', 'Iphone 16 pro', '1024', '749900');


INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('1', 'Galaxy A16 ', '128', '84990')
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('2', 'Galaxy S24 ', '256', '285999');
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('3', 'Galaxy S25 ', '256', '409990');
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('4', 'Galaxy S25 Ultra ', '1024', '499990');
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('5', 'Galaxy A35 ', '256', '126999');
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('6', 'Galaxy A55 ', '256', '145999');


INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('1', 'xiaomi redmi 13', '256', '64999')
INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('2', 'xiaomi redmi note 13', '256', '89900');
INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('3', 'xiaomi redmi a3', '128', '37900');
INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('4', 'xiaomi redmi 14c', '256', '59999');
INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('5', 'xiaomi 14t', '512', '199999');
INSERT INTO `xiaomi` (`xiaomiID`, `xiaomi_nev`, `xiaomi_max_memoria`, `xiaomi_mennyisegi_ar`) VALUES ('6', 'xiaomi redmi 15', '256', '3499999');

-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = 469900 WHERE iphone_nev = 'Iphone 16';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_nev = 'Galaxy A55';

-- 11.feladat: samsung tábla termék hozzáadása.
INSERT INTO `samsung` (`samsungID`, `samsung_nev`, `samsung_max_memoria`, `samsung_mennyisegi_ar`) VALUES ('6', 'Galaxy A56', '256', '219989')