const employee = require('/lib/employee.')

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can make name with  constructor", () => {
  const name = "Bill";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can make id with  constructor", () => {
  const testValue = 100;
  const e = new Employee("Alex", testValue);
  expect(e.id).toBe(testValue);
});

test("Can make emial with  constructor", () => {
  const testValue = "test@test.com";
  const e = new Employee("Alex", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name with  getName()", () => {
  const testValue = "Bill";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id with  getId()", () => {
  const testValue = 100;
  const e = new Employee("Alex", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email with  getEmail()", () => {
  const testValue = "Alex@gmail.com";
  const e = new Employee("Alex", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Bill", 1, "Bill@gmail.com");
  expect(e.getRole()).toBe(testValue);
});