use organization;
CREATE Table user_info(
    id INT,
    user_name CHAR(50),
    items VARCHAR(50),
    price DECIMAL(10,2) 
);
--execution is imp everytime and refres the db is also imp, in sql it is imp to define size of datatype otherwise it will produce errors
INSERT INTO user_info VALUES(1,"mona","1:milk,2:bread", 40);
INSERT INTO user_info VALUES(2,"aditya","butter", 30);
INSERT INTO user_info VALUES(1,"ritika","1:milk,2:bread,3:toothpaste", 70);
INSERT INTO user_info VALUES(1,"kunal","sunscreen, chips", 100);

SELECT * FROM user_info;