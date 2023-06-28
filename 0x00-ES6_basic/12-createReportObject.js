export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[deparmentName] = [...employees];
  }

  return {
    allEmployees,
    getNumberofDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
