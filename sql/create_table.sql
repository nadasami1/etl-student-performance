CREATE DATABASE universityDWH;
GO

USE universityDWH;
GO

CREATE TABLE dbo.StudentPerformance (
    student_id INT,
    student_name NVARCHAR(100),
    age INT,
    city NVARCHAR(100),
    subject NVARCHAR(100),
    grade INT,
    attendance_date DATE,
    attendance_status NVARCHAR(20)
);

SELECT *
FROM dbo.StudentPerformance;