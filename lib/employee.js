const employee = require("../lib/employee");

test("Can create employee", () => {
  const emp = new employee();
  expect(typeof(emp)).toBe("object");
});

test("Can set name", () => {
  const name = "Jim";
  const emp = new employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id", () => {
  const testValue = 100;
  const emp = new employee("Bob", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "test@gmail.com";
  const emp = new employee("Bob", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can get name", () => {
  const testValue = "Bob";
  const emp = new employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id", () => {
  const testValue = 100;
  const emp = new employee("Bob", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email", () => {
  const testValue = "test@gmail.com";
  const emp = new employee("Bob", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return employee", () => {
  const testValue = "employee";
  const emp = new employee("Jim", 1, "test@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});