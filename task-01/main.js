const grades = [7, 9, 5, 10, 8, 6];

// Notele >= 8
const highGrades = grades.filter((grade) => grade >= 8);

// Media notelor
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Fiecare notДѓ + 1, maximum 10
const boosted = grades.map((grade) => Math.min(grade + 1, 10));

console.log(`Note: ${grades.join(", ")}`);
console.log(`Note >= 8: ${highGrades.join(", ")}`);
console.log(`Media: ${average.toFixed(2)}`);
console.log(`Note majorate: ${boosted.join(", ")}`);