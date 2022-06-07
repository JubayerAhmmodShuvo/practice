/* Your table: maintable_NKA5T

MySQL version: 8.0.23

In this MySQL challenge, your query should return the information for the employee with the third highest salary. Write a query that will find this employee and return that row, but then replace the DivisionID column with the corresponding DivisionName from the table cb_companydivisions. You should also replace the ManagerID column with the ManagerName if the ID exists in the table and is not NULL.

Your output should look like the */

SELECT EmployeeName, ManagerName, Salary, DivisionName
FROM maintable_NKA5T
JOIN cb_companydivisions
ON maintable_NKA5T.DivisionID = cb_companydivisions.DivisionID
WHERE EmployeeID = (
SELECT EmployeeID
FROM maintable_NKA5T
ORDER BY Salary DESC
LIMIT 2,1
);