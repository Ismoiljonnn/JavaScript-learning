const employee = {
  name: "Malika",
  address: { city: "Toshkent", district: "Chilonzor" },
  job: { company: "IT Park", experience: 3, salary: 9000000 }
};

const employeeCity = employee.address.city;
const employeeCompany = employee.job.company;

const increaseSalary = (emp, percentage) => {
  emp.job.salary += (emp.job.salary * percentage) / 100;
  return emp.job.salary;
};

module.exports = { employeeCity, employeeCompany, increaseSalary, employee };
