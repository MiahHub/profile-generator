const employee = require('../lib/employee')

test("Can instantiate employee instance", () => {
  const emp = new employee();
  expect(typeof(emp)).toEqual("object");
});

test("Can make name with  constructor", () => {
  const name = "Bill";
  const emp = new employee(name);
  expect(emp.name).toEqual(name);
});

test("Can make id with  constructor", () => {
  const testValue = 100;
  const emp = new employee("Alex", testValue);
  expect(emp.id).toEqual(testValue);
});

test("Can make emial with  constructor", () => {
  const testValue = "test@test.com";
  const emp = new employee("Alex", 1, testValue);
  expect(emp.email).toEqual(testValue);
});

test("Can get name with  getName()", () => {
  const testValue = "Bill";
  const emp = new employee(testValue);
  expect(emp.getName()).toEqual(testValue);
});

test("Can get id with  getId()", () => {
  const testValue = 100;
  const emp = new employee("Alex", testValue);
  expect(emp.getId()).toEqual(testValue);
});

test("Can get email with  getEmail()", () => {
  const testValue = "Alex@gmail.com";
  const emp = new employee("Alex", 1, testValue);
  expect(emp.getEmail()).toEqual(testValue);
});

test("getRole() should return employee", () => {
  const testValue = "employee";
  const emp = new employee("Bill", 1, "Bill@gmail.com");
  expect(emp.getRole()).toEqual(testValue);
});