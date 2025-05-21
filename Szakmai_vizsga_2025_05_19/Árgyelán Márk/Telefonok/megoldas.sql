-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok
DEFAULT CHARACTER SET utf8
COLLATE utf8_hungarian_ci;
-- 3. feladat: samsung tábla létrehozása

CREATE TABLE samsung (
	samsungID int(11) NOT NULL AUTO_INCREMENT,
	samsung_nev varchar(100) NOT NULL, 
	samsung_max_memoria varchar(20) NOT NULL, 
	samsung_mennyisegi_ar int(11) NOT NULL,
	PRIMARY KEY(samsungID) 
);
CREATE TABLE  iphone (
    iphoneID INT(11) NOT NULL AUTO_INCREMENT,
    iphone_nev VARCHAR(100) NOT NULL,
    iphone_max_memoria VARCHAR(20) NOT NULL,
    iphone_mennyisegi_ar INT(11) NOT NULL,
    PRIMARY KEY (iphoneID)
);
CREATE TABLE  xiaomi (
    xiaomiID INT(11) NOT NULL AUTO_INCREMENT,
    xiaomi_nev VARCHAR(100) NOT NULL,
    xiaomi_max_memoria VARCHAR(20) NOT NULL,
    xiaomi_mennyisegi_ar INT(11) NOT NULL,
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
    ADD CONSTRAINT fk_samsung
        FOREIGN KEY (samsung_ID) REFERENCES samsung(samsungID),
    ADD CONSTRAINT fk_iphone
        FOREIGN KEY (iphone_ID) REFERENCES iphone(iphoneID),
    ADD CONSTRAINT fk_xiaomi
        FOREIGN KEY (xiaomi_ID) REFERENCES xiaomi(xiaomiID);
-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése
INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar) VALUES (?, ?, ?);
INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar) VALUES (?, ?, ?);
INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_:memoria, xiaomi_mennyisegi_ar) VALUES (?, ?, ?);
-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';
UPDATE iphone SET iphone_mennyisegi_ar = 469900 WHERE iphone_nev = 'iPhone 16';
-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';