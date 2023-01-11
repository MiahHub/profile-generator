const Employee = require("../lib/Employee");

test("Can create employee", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("Can set name", () => {
  const name = "Jim";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id", () => {
  const testValue = 100;
  const emp = new Employee("Bob", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "test@gmail.com";
  const emp = new Employee("Bob", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can get name", () => {
  const testValue = "Bob";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id", () => {
  const testValue = 100;
  const emp = new Employee("Bob", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email", () => {
  const testValue = "test@gmail.com";
  const emp = new Employee("Bob", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const emp = new Employee("Jim", 1, "test@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});