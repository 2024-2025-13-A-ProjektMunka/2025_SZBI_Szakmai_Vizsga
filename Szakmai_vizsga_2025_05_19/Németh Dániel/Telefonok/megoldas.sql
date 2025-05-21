-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok collate utf8 DEFAULT CHARACTER SET utf8_hungarian_ci
-- 3. feladat: samsung tábla létrehozása
CREATE TABLE samsung(
samsungID int PRIMARY KEY AUTO_INCREMENT,
samsung_nev varchar(100),
samsung_max_memoria varchar(100),
samsung_mennyisegi_ar int
);

CREATE TABLE iphone(
iphoneID int PRIMARY KEY AUTO_INCREMENT,
iphone_nev varchar(100),
iphone_max_memoria varchar(100),
iphone_mennyisegi_ar int
);

CREATE TABLE xiaomi(
xiaomiID int PRIMARY KEY AUTO_INCREMENT,
xiaomi_nev varchar(100),
xiaomi_max_memoria varchar(100),
xiaomi_mennyisegi_ar int
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
INSERT INTO iphone(iphoneID, iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES(1, "iPhone 13", 256, 289900),
(2, "IPhone 14", 128, 264900),
(3, "Iphone 15", 256, 399990),
(4, "IPhone 16e", 128, 299900),
(5, "IPhone 16", 256, 449900),
(6, "IPhone 16 pro", 1024, 749900);

INSERT INTO samsung(samsungID, samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES
(1, "Galaxy A16", 128, 84990),
(2, "Galaxy S24", 256, 285999),
(3, "Galaxy S25", 256, 409990),
(4, "Galaxy S25 Ultra", 1024, 499900),
(5, "Galaxy A35", 256, 126999),
(6, "Galaxy A55", 256, 145999);

INSERT INTO xiaomi(xiaomiID, xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES
(1, "xiaomi redmi 13", 256, 64999),
(2, "xiaomi redmi note 13", 256, 89900),
(3, "xiaomi redmi a3", 128, 37900),
(4, "xiaomi redmi 14c", 256, 59999),
(5, "xiaomi 14t", 512, 199999),
(6, "xiaomi redmi 15", 256, 349999);
-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';

INSERT INTO samsung(samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar) VALUES("Galaxy A56", 256, 219989);