# LIKE, IN, and BETWEEN operators in SQL.

These operators are commonly used to filter and retrieve specific rows from a table based on conditions.

1)  LIKE (pattern matching)

Used for searching patterns in strings.

%   ---→ matches any sequence of characters.

_    ----→ matches a single character.

-- Find employees whose names start with 'A'
SELECT Name FROM Employees
WHERE Name LIKE 'A%';

-- Find employees whose names end with 'e'
SELECT Name FROM Employees
WHERE Name LIKE '%e';

-- Find employees with 5-letter names starting with 'D'
SELECT Name FROM Employees
WHERE Name LIKE 'D____';


2. IN (check multiple values)

Instead of multiple OR conditions, use IN.

-- Employees in HR or Sales

SELECT Name, Department FROM Employees
WHERE Department IN ('HR', 'Sales');

the above code is same as 

WHERE Department = 'HR' OR Department = 'Sales';




3. BETWEEN (range filtering)

-- Employees with salary between 50,000 and 60,000

SELECT Name, Salary FROM Employees
WHERE Salary BETWEEN 50000 AND 60000;

-- Employees aged 25 to 35 (if age column existed)

SELECT Name, Age FROM Employees
WHERE Age BETWEEN 25 AND 35;

You can also use it with dates:

WHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';



# GROUP BY & HAVING

What GROUP BY does

It groups rows that share the same values in one (or more) columns, so you can run aggregate functions per group.

eX: Employees Table

ID | Name    | Department  | Salary
1  | Alice   | HR          | 50000
2  | Bob     | Engineering | 60000
3  | Charlie | HR          | 55000
4  | David   | Engineering | 45000
5  | Eve     | Marketing   | 70000
6  | Frank   | Sales       | 52000


SELECT Department, COUNT(*) AS emp_count
FROM Employees
GROUP BY Department
ORDER BY emp_count DESC;



Step 1: Group by Department

HR → Alice, Charlie → 2 employees

Engineering → Bob, David → 2 employees

Marketing → Eve → 1 employee

Sales → Frank → 1 employee

Step 2: Apply COUNT(*)

HR → 2

Engineering → 2

Marketing → 1

Sales → 1

Step 3: Order by emp_count DESC
Largest counts first.

 FINAL OUTPUT : 

Department   | emp_count
-------------|----------
HR           | 2
Engineering  | 2
Marketing    | 1
Sales        | 1


GRoup by and having 

SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) >120000;

query to find all departments with a total salary greater than 120,000.

The query should group the data by department and use the HAVING clause to filter the results based on the total salary.

