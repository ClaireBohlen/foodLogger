CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (200) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);