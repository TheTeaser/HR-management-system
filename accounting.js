'use strict';

function render() {
    const container = document.getElementById("tableContainer");

    const tbl = document.createElement("table");

    //Table Head creation:
    const tblHead = document.createElement("tr");
    const departmentName = document.createElement("th");
    departmentName.textContent = "Department Name";
    tblHead.appendChild(departmentName);

    const numEmployees = document.createElement("th");
    numEmployees.textContent = "Employees Number";
    tblHead.appendChild(numEmployees);

    const avgSalary = document.createElement("th");
    avgSalary.textContent = "Average Salary";
    tblHead.appendChild(avgSalary);

    const totalSalary = document.createElement("th");
    totalSalary.textContent = "Total Salary";
    tblHead.appendChild(totalSalary);

    tbl.appendChild(tblHead);

    
    const tblBody = document.createElement("tr");
    const departmentData = document.createElement("td");
    departmentData.textContent


    const tblFooter = document.createElement("tfoot");



    // let retrievedData= localStorage.getItem('New Employee');

}





render();