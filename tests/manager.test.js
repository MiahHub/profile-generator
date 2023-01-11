const manager = require('../lib/manager');
const employee = require('../lib/employee');

test("Can set office number with constructor", () => {
  const testValue = 100;
  const emp = new manager("Alex", 1, "Alex@gmail.com", testValue);
  expect(emp.officeNumber).toEqual(testValue);
});

test("getRole() should return manager", () => {
  const testValue = "manager";
  const emp = new manager("Alex", 1, "Alex@gmail.com", 100);
  expect(emp.getRole()).toEqual(testValue);
});

test("Can get office number with getOffice()", () => {
  const testValue = 100;
  const emp = new manager("Alex", 1, "Alex@gmail.com", testValue);
  expect(emp.getOfficeNumber()).toEqual(testValue);
});