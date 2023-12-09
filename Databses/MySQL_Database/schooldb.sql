CREATE DATABASE School;

CREATE TABLE STUDENT(
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    class VARCHAR(50) NOT NULL,
    date  DATE,
    marks INT,
    city char(50)
);
USE School;
INSERT INTO STUDENT VALUES(101,"Mona","XII",20220415,90,"Jaipur");
USE School;
INSERT INTO STUDENT VALUES(102,"Ritika","XI",20220314,95,"Pune");
USE school;
INSERT INTO STUDENT VALUES(103,"Jhon","XI",20220415,83,"Mumbai");
INSERT INTO STUDENT VALUES(104,"Aadii","IX",20220415,91,"DELHI");
INSERT INTO STUDENT VALUES(105,"Kunal","X",20220415,90,"DELHI");
INSERT INTO STUDENT VALUES(106,"Priyanka","XI",20220415,75,"Mumbai");
INSERT INTO STUDENT VALUES(107,"Dhruv","X",20220415,70,"Jaipur");
INSERT INTO STUDENT VALUES(108,"Mohi","XII",20220415,72,"Gujrat");
USE School;
SELECT * FROM STUDENT;
--where clause
USE School;
SELECT city,id,name 
FROM STUDENT
WHERE city="DELHI"; 
--order by clause
USE School;
SELECT class,name
FROM STUDENT
WHERE class="XI"
ORDER BY class ASC;
--group by clause
USE School;
SELECT marks
FROM STUDENT
WHERE marks>80
GROUP BY marks;--same marks ko group krdega
--aggregate function
USE School;
SELECT AVG(marks)
FROM STUDENT;
USE School;
SELECT MIN(marks)
FROM STUDENT;
USE school;

UPDATE STUDENT 
set marks=83
WHERE id=103;

USE school;

UPDATE STUDENT 
set marks=91
WHERE id=104;

USE school;

UPDATE STUDENT 
set marks=90
WHERE id=105;

USE school;

UPDATE STUDENT 
set marks=75
WHERE id=106;

USE school;

UPDATE STUDENT 
set marks=73
WHERE id=107;

USE school;

UPDATE STUDENT 
set marks=65
WHERE id=108;

USE school;
SELECT * FROM STUDENT;

--having clause
USE school;
SELECT count(name),city
FROM STUDENT
GROUP BY city
HAVING MAX(marks)>82;

--operators 
 USE school;
 SELECT * FROM STUDENT
 WHERE marks>76 AND city="jaipur";

 USE school;
 SELECT * FROM STUDENT
 WHERE  city="delhi" AND marks BETWEEN 80 AND 95;

 --limit clause
 USE school;
 SELECT * FROM STUDENT WHERE marks>="85"
 LIMIT 3;
