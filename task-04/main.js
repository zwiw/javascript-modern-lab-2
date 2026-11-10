
import {
  employees,
  groupByDepartment,
  filterByDepartment,
  averageSalary,
  getExperienced,
  raiseSalary,
  formatEmployee,
} from "./employees.js";

console.log("=== RAPORT ANGAJAȚI ===\n");

const groups = groupByDepartment(employees);

for (const [department, members] of Object.entries(groups)) {
  console.log(`Departament ${department} (${members.length} angajați):`);

  members.forEach((e) =>
    console.log(`  ${formatEmployee(e)}`)
  );
}

console.log(
  `\nAngajați IT: ${filterByDepartment(employees, "IT")
    .map(({ name }) => name)
    .join(", ")}`
);

console.log(
  `Salariul mediu: ${averageSalary(employees).toFixed(2)} lei`
);

const experienced = getExperienced(employees);

console.log(
  `\nExperiență > 3 ani: ${experienced
    .map(({ name }) => name)
    .join(", ")}`
);

const raised = raiseSalary(experienced);

console.log("\nDupă majorarea cu 10%:");

raised.forEach((e) =>
  console.log(`  ${formatEmployee(e)}`)
);

const afterRaise = employees.map(
  (e) => raised.find(({ id }) => id === e.id) ?? e
);

console.log(
  `\nSalariul mediu după majorare: ${averageSalary(afterRaise).toFixed(2)} lei`
);
