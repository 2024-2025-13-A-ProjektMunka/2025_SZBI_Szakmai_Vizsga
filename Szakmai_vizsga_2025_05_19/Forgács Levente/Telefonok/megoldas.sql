-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok
CHARACTER SET utf8
COLLATE utf8_hungarian_ci;
-- 3. feladat: samsung tábla létrehozása
CREATE TABLE samsung (
    samsungID int(11) NOT NULL AUTO_INCREMENT,
    samsung_nev varchar(365) NOT NULL;
    samsung_max_memoria varchar(365) NOT NULL;
    samsung_mennyisegi_ar int(11) NOT NULL; 

    PRIMARY KEY (samsung_ID)
     FOREIGN KEY (samsung_ID) REFERENCES samsung(samsungID)
);
CREATE TABLE iphone (
    iphoneID int(11) NOT NULL AUTO_INCREMENT,
    iphone_nev varchar(365) NOT NULL;
    iphone_max_memoria varchar(365) NOT NULL;
    iphone_mennyisegi_ar int(11) NOT NULL; 
    
    PRIMARY KEY (iphone_ID)
    FOREIGN KEY (iphone_ID) REFERENCES iphone(iphoneID)
);

CREATE TABLE xiaomi(
    xiaomiID int(11) NOT NULL AUTO_INCREMENT,
    xiaomi_nev varchar(365) NOT NULL;
    xiaomi_max_memoria varchar(365) NOT NULL;
    xiaomi_mennyisegi_ar int(11) NOT NULL; 
    
    PRIMARY KEY (xiaomi_ID)
    FOREIGN KEY (xiaomi_ID) REFERENCES xiaomi(xiaomiID)
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

-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése
INSERT INTO samsung (samsung_tipus, samsung_max_memoria, samsung_mennyisegi_ar) VALUES (?, ?, ?);
INSERT INTO iphone (iphone_tipus, iphone_max_memoria, iphone_mennyisegi_ar) VALUES (?, ?, ?);
INSERT INTO xiaomi (xiaomi_tipus, xiaomi_max_memoria, xiaomi_mennyisegi_ar) VALUES (?, ?, ?);
-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';

INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ('Samsung A56', '256', '219989',);