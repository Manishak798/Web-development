CREATE DATABASE Mall;
use Mall;
CREATE TABLE users (
    id INT,
    user_name CHAR(50),
    items VARCHAR(50),
    price DECIMAL(10,2) 
    );
 INSERT INTO users VALUES(1,"mona","1:milk,2:bread", 40);