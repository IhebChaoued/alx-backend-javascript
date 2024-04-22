export default function createIteratorObject(report) {
  const iterator = [];
  for (const department in report.allEmployees) {
    for (const employee of report.allEmployees[department]) {
      iterator.push(employee);
    }
  }
  return iterator;
}
