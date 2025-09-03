# SQL Step 1: Core Building Blocks

1. What is a Table?

A Table is the basic unit in a database.

Just like an Excel sheet:

Columns → Fields/Attributes (like Name, Age, Salary)

Rows → Records/Tuples (like one student/employee data)


| StudentID | Name    | Age | Course |
| --------- | ------- | --- | ------ |
| 1         | Alice   | 20  | BBA    |
| 2         | Bob     | 22  | MBA    |
| 3         | Charlie | 21  | BCA    |



2. What is a Schema?

A Schema = Structure of a table.

👉 Schema defines how data should look.
Without schema → Garbage data can be stored.

Example:

StudentID → Integer

Name → Text (string)

Age → Integer

Course → Text


🔹 3. What is a Key?

Keys are used to uniquely identify and relate data.

Primary Key (PK)

Uniquely identifies each row in a table.

Example: StudentID in STUDENTS table.

No duplicates, no NULLs.

Foreign Key (FK)

Connects one table to another.

Example: CourseID in STUDENTS table linking to CourseID in COURSES table.

👉 These relationships make SQL powerful.


#  Database vs Table

Database → A big container (like a folder) where all your tables live.

Table → Inside the database, where actual data is stored in rows & columns.

Example:

Database: SchoolDB

Tables inside it:

Students

Teachers

Courses

So, first you create/use a database, then you create tables inside it.

Database ---→ Tables -----→ Rows (Records)

# 📘 SQL Data Types

Data types tell the database what kind of data can be stored in a column.
If you don’t set the right data type → garbage data may get stored, or performance may suffer.


🔹 1. Numeric Data Types

Used for numbers.

INT / INTEGER → Whole numbers (e.g., 10, -5, 1000).

BIGINT → Very large whole numbers.

SMALLINT → Smaller range integers.

DECIMAL(p, s) / NUMERIC(p, s)

Fixed-point numbers (good for money).

p = precision (total digits), s = scale (digits after decimal).

Example: DECIMAL(8,2) → max 8 digits, with 2 after decimal → 123456.78.

FLOAT / REAL / DOUBLE PRECISION → Approximate decimal values (good for scientific data, not for money).



🔹 2. Character / String Data Types

Used for text.

CHAR(n) → Fixed-length string.

If you store "ABC" in CHAR(5), it becomes "ABC " (padded).

Example: CHAR(2) → Always stores 2 characters.

VARCHAR(n) → Variable-length string (commonly used). ----------------> mostly used 

Stores exactly as many characters as needed, up to n.

Example: VARCHAR(50) → Names up to 50 chars.

TEXT → Very long text (paragraphs, articles, descriptions).



🔹 3. Date & Time Data Types

Used for time-related data.

DATE → YYYY-MM-DD (e.g., 2025-09-01).

TIME → HH:MM:SS (e.g., 14:30:00).

DATETIME / TIMESTAMP → Combination of date & time.

YEAR (MySQL) → Stores only year.

👉 Example use cases:

DOB DATE → Date of birth.

JoiningDate TIMESTAMP → Record when employee joined.



🔹 4. Boolean Type

BOOLEAN → Stores TRUE or FALSE.

Some databases internally treat it as 0 (false) and 1 (true).


🔹 5. Binary / Miscellaneous

BLOB (Binary Large Object) → Images, audio, video, PDFs, etc.

UUID → Universally Unique Identifier (like 550e8400-e29b-41d4-a716-446655440000).

JSON → (PostgreSQL, MySQL) store semi-structured JSON data.


Durga Sir Style Summary

Numbers → INT, DECIMAL, FLOAT

Strings → CHAR, VARCHAR, TEXT

Dates → DATE, TIME, TIMESTAMP

Other → BOOLEAN, BLOB, JSON


# 4. First SQL Command: CREATE TABLE

We create a table using CREATE TABLE.

Example:


CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Course VARCHAR(20)
);

Students is the table name, not the database name.


CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    Salary DECIMAL(10,2),
    IsActive BOOLEAN,
    JoiningDate DATE,
    Resume TEXT
);




# SQL Step 2: Inserting & Retrieving Data

1. Inserting Data into a Table

We use the INSERT INTO statement.

Syntax:
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);


Example: Students Table

INSERT INTO Students (StudentID, Name, Age, Course)
VALUES (1, 'Alice', 20, 'BBA');

INSERT INTO Students (StudentID, Name, Age, Course)
VALUES (2, 'Bob', 22, 'MBA');

INSERT INTO Students (StudentID, Name, Age, Course)
VALUES (3, 'Charlie', 21, 'BCA');


2. Retrieving Data – SELECT

The SELECT statement is used to fetch data from a table.

SELECT column1, column2
FROM table_name
WHERE condition;

(a) Select All Columns

SELECT * FROM Students;

Output:

| StudentID | Name    | Age | Course |
| --------- | ------- | --- | ------ |
| 1         | Alice   | 20  | BBA    |
| 2         | Bob     | 22  | MBA    |
| 3         | Charlie | 21  | BCA    |


(b) Select Specific Columns

SELECT Name, Course FROM Students;


| Name    | Course |
| ------- | ------ |
| Alice   | BBA    |
| Bob     | MBA    |
| Charlie | BCA    |


(c) Filtering with WHERE

SELECT * FROM Students
WHERE Age > 20;

Output:

| StudentID | Name    | Age | Course |
| --------- | ------- | --- | ------ |
| 2         | Bob     | 22  | MBA    |
| 3         | Charlie | 21  | BCA    |


(d) Using Conditions

=  → Equal

> <  → Greater/Less

!= or <>  → Not equal

BETWEEN  → Range check

LIKE  → Pattern matching

IN  → Multiple values


SELECT * FROM Students
WHERE Course IN ('MBA', 'BBA');

output :

| StudentID | Name  | Age | Course |
| --------- | ----- | --- | ------ |
| 1         | Alice | 20  | BBA    |
| 2         | Bob   | 22  | MBA    |


If you want to modify existing data → UPDATE.

UPDATE Students
SET Age = 23
WHERE StudentID = 2;

👉 Now Bob’s age becomes 23


🔹 4. Deleting Data

If you want to remove data → DELETE.

DELETE FROM Students
WHERE StudentID = 3;
