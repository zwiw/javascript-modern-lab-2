import { calculateAverage, calculateSum } from "./utils.js";
import {
  students,
  showAllStudents,
  getTopStudents,
  getClassAverage,
  findStudentById,
  addStudent,
  formatStudent,
} from "./students.js";

// Partea 1: utils.js
const values = [10, 20, 30, 40];
console.log(`Suma: ${calculateSum(values)}`);
console.log(`Media: ${calculateAverage(values)}`);

// Partea 2: aplicaИ›ia cu elevi
console.log("\nToИ›i elevii:");
showAllStudents(students);

console.log("\nElevi cu nota >= 8:");
showAllStudents(getTopStudents(students));

console.log(`\nMedia clasei: ${getClassAverage(students).toFixed(2)}`);

for (const id of [3, 99]) {
  try {
    console.log(`GДѓsit: ${formatStudent(findStudentById(students, id))}`);
  } catch (error) {
    console.log(`Eroare: ${error.message}`);
  }
}

const updated = addStudent(students, { id: 6, name: "Dan", grade: 9 });
console.log(`\nDupДѓ adДѓugare (${updated.length} elevi):`);
showAllStudents(updated);