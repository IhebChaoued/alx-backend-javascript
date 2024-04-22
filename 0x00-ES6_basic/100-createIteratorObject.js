export default function createIteratorObject(report) {
  const iterator = [];
  for (const department in report.allEmployees) {
    iterator.push(...report.allEmployees[department]);
  }
  return iterator[Symbol.iterator]();
}
