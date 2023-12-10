CREATE DATABASE employee;
USE employee;
CREATE Table emp_info(
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(60) NOT NULL,
    emp_dept VARCHAR(60) DEFAULT 'sales'
);
CREATE Table salary(
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(60) NOT NULL,
    emp_salary DECIMAL DEFAULT 20000,
    emp_dept VARCHAR(60) DEFAULT 'sales'
);
USE employee;
INSERT INTO emp_info VALUES(1,"joe","accounts");
INSERT INTO emp_info VALUES(2,"alice","store");
INSERT INTO emp_info VALUES(3,"adam");
INSERT INTO emp_info VALUES(4,"riya");
INSERT INTO emp_info VALUES(5,"joeshep","accounts");
