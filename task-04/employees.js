
export const employees = [
  { id: 1, name: "Ana", department: "IT", salary: 20000, experience: 5 },
  { id: 2, name: "Ion", department: "IT", salary: 15000, experience: 2 },
  { id: 3, name: "Maria", department: "HR", salary: 12000, experience: 4 },
  { id: 4, name: "Vlad", department: "Vânzări", salary: 11000, experience: 1 },
  { id: 5, name: "Elena", department: "Vânzări", salary: 13000, experience: 6 },
  { id: 6, name: "Dan", department: "IT", salary: 18000, experience: 3 },
  { id: 7, name: "Olga", department: "HR", salary: 12500, experience: 8 },
];

export const groupByDepartment = (list) =>
  list.reduce(
    (groups, employee) => ({
      ...groups,
      [employee.department]: [
        ...(groups[employee.department] ?? []),
        employee,
      ],
    }),
    {}
  );

export const filterByDepartment = (list, department) =>
  list.filter((employee) => employee.department === department);

export const averageSalary = (list) =>
  list.reduce((sum, { salary }) => sum + salary, 0) / list.length;

export const getExperienced = (list) =>
  list.filter(({ experience }) => experience > 3);

export const raiseSalary = (list, percent = 10) =>
  list.map((employee) => ({
    ...employee,
    salary: Math.round(employee.salary * (1 + percent / 100)),
  }));

export const formatEmployee = ({
  name,
  department,
  salary,
  experience,
}) =>
  `${name} (${department}) - ${salary} lei, ${experience} ani experiență`;
