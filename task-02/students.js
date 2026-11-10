import { calculateAverage } from "./utils.js";

export const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Vlad", grade: 6 },
  { id: 5, name: "Elena", grade: 8 },
];

export const formatStudent = ({ id, name, grade }) =>
  `#${id} ${name} - nota ${grade}`;

export const showAllStudents = (list) =>
  list.forEach((student) => console.log(formatStudent(student)));

export const getTopStudents = (list) =>
  list.filter(({ grade }) => grade >= 8);

export const getClassAverage = (list) =>
  calculateAverage(list.map(({ grade }) => grade));

export const findStudentById = (list, id) => {
  const student = list.find((s) => s.id === id);
  if (!student) {
    throw new Error(`Elevul cu id ${id} nu existДѓ`);
  }
  return student;
};

export const addStudent = (list, student) => {
  if (list.some(({ id }) => id === student.id)) {
    throw new Error(`Id-ul ${student.id} existДѓ deja`);
  }
  return [...list, student];
};