export default function createEmployeesObject(departmentName, employees) {
  const name = {[departmentName]: [...employees]};
  return name;
}
