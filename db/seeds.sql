-- Ensured that bool or SQL TINYINT(1) = devoured for table is correct
-- Using all different burgers to make at USER's choices
-- Using names from Burger King, Wendys, etc...

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Big-Mac burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggy burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Whooper', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Jalapeno Cheeseburger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Porkburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Mini Cheeseburger', true);