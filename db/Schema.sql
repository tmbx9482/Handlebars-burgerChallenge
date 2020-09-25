-- README Directions on how to create our mySQL

-- * Letting the user know to drop database if not created **
DROP DATABASE IF EXISTS burgers_db;


CREATE DATABASE burgers_db;
USE burgers_db;

--    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


SELECT * FROM burgers