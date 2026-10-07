create database emp;
use emp;


create table departments(
  department_id INT primary key,
    department_name VARCHAR(50)
);

create table employeesdata(
employee_id INT PRIMARY KEY AUTO_INCREMENT,
employee_name VARCHAR(50),
salary INT,
department_id INT,
city VARCHAR(50),
FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

alter table employeesdata drop column city;

INSERT INTO departments (department_id, department_name) VALUES
(10, 'IT'),
(20, 'HR'),
(30, 'Finance'),
(40, 'Marketing'),
(50, 'Sales'),
(60, 'Support');

INSERT INTO employeesdata (employee_name, salary, department_id) VALUES
('Arun', 45000, 10),
('Bala', 35000, 10),
('Akash', 60000, 10),
('Gokul', 40000, 20),
('Vishnu', 30000, 20),
('Sanjay', 55000, 30),
('Arun', 50000, 30),
('Praveen', 42000, 40),
('Chandru', 38000, 50);

SELECT *FROM employeesdata WHERE salary > (SELECT AVG(salary) FROM employeesdata);

select * from employeesdata where salary =(select max(salary) from employeesdata);

select * from employeesdata where salary =(select min(salary) from employeesdata);

select * from employeesdata where salary >(select avg(salary) from employeesdata  WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'IT'));
    
SELECT * FROM employeesdata WHERE department_id IN (SELECT department_id FROM departments WHERE department_name IN ('IT', 'HR'));

select * from employeesdata where department_id not in (select department_id from departments where department_name ='HR');

select * from departments as d where exists (select 1 from employeesdata as e where e.department_id =d.department_id);

select * from departments as d where not exists (select 1 from employeesdata as e where e.department_id =d.department_id);

select * from employeesdata where salary <(select max(salary) from employeesdata);

SELECT * FROM employeesdata as e WHERE e.salary > (SELECT AVG(e2.salary) FROM employeesdata as e2 WHERE e2.department_id = e.department_id);



