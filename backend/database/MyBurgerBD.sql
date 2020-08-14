CREATE DATABASE MyBurgerBD;
USE MyBurgerBD;

CREATE TABLE Orders(
	`id_burger` INT(20) PRIMARY KEY AUTO_INCREMENT,
    `total_price` DECIMAL(5,2) NOT NULL,
    `date_creation` VARCHAR(100) NOT NULL
);

CREATE TABLE Ingredients(
    `name` VARCHAR(10) NOT NULL,
    `amount` INT(20),
    `id_burger` INT(20),
    FOREIGN KEY (`id_burger`) REFERENCES Orders(`id_burger`)
);
