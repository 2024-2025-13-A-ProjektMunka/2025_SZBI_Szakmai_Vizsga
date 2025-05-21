-- 2. feladat: Adatbázis létrehozása
CREATE DATABASE telefonok CHARACTER set utf8 COLLATE utf8_hungarian_ci;

-- 3. feladat: samsung tábla létrehozása
CREATE TABLE samsung (
	samsungID int(11) NOT NULL AUTO_INCREMENT,
    samsung_nev varchar(255) NOT NULL,
    samsung_max_memoria varchar(255) NOT NULL,
    samsung_mennyisegi_ar varchar(255) NOT NULL,
    PRIMARY KEY(samsungID)
)

CREATE TABLE iphone (
	iphone_ID int(11) NOT NULL AUTO_INCREMENT,
    iphone_nev varchar(255) NOT NULL,
    iphone_max_memoria varchar(255) NOT NULL,
    iphone_mennyisegi_ar varchar(255) NOT NULL,
    PRIMARY KEY(iphoneID)
)

CREATE TABLE xiaomi (
	xiaomiID int(11) NOT NULL AUTO_INCREMENT,
    xiaomi_nev varchar(255) NOT NULL,
    xiaomi_max_memoria varchar(255) NOT NULL,
    xiaomi_mennyisegi_ar varchar(255) NOT NULL,
    PRIMARY KEY(xiaomiID)
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

-- 8. feladat: samsung, iphone és xiaomi táblák feltöltése

-- IPhone
INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES ("iPhone 13", 256, 289900);

INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES ("iPhone 14", 128, 264900);

INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES ("iPhone 15", 256, 399990);

INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES ("iPhone 16e", 128, 299900);

INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES ("iPhone 16", 256, 449900);

INSERT INTO iphone (iphone_nev, iphone_max_memoria, iphone_mennyisegi_ar)
VALUES ("iPhone 16 pro", 1024, 749900);

-- Samsung
INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ("Galaxy A16", 128, 84990);

INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ("Galaxy S24", 256, 285999);

INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ("Galaxy S25", 256, 409990);

INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ("Galaxy 25 Ultra", 1024, 499900);

INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ("Galaxy A35", 256, 126999);

INSERT INTO samsung (samsung_nev, samsung_max_memoria, samsung_mennyisegi_ar)
VALUES ("Galaxy A55", 256, 145999);

-- Xiaomi
INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES ("xiaomi redmi 13", 256, 64999);

INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES ("xiaomi redmi note 13", 256, 89900);

INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES ("xiaomi redmi a3", 128, 37900);

INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES ("xiaomi 14c", 256, 59999);

INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES ("xiaomi 14t", 512, 199999);

INSERT INTO xiaomi (xiaomi_nev, xiaomi_max_memoria, xiaomi_mennyisegi_ar)
VALUES ("xiaomi redmi 15", 256, 3499999);

-- 9. feladat: iphone tábla módosítása
UPDATE iphone SET iphone_mennyisegi_ar = ${ujAr} WHERE iphone_tipus = '${nev}';

-- 10. feladat: samsung táblából törlés
DELETE FROM samsung WHERE samsung_tipus = '${nev}';