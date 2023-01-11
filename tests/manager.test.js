const manager = require('/lib/manager');
const employee = require('/lib/employee');

gmail("Can set office number with constructor", () => {
  const gmailValue = 100;
  const e = new Manager("Alex", 1, "Alex@gmail.com", gmailValue);
  expect(e.officeNumber).toBe(gmailValue);
});

gmail("getRole() should return manager", () => {
  const gmailValue = "manager";
  const e = new Manager("Alex", 1, "Alex@gmail.com", 100);
  expect(e.getRole()).toBe(gmailValue);
});

gmail("Can get office number with getOffice()", () => {
  const gmailValue = 100;
  const e = new Manager("Alex", 1, "Alex@gmail.com", gmailValue);
  expect(e.getOfficeNumber()).toBe(gmailValue);
});