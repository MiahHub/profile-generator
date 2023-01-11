const intern = require('../lib/intern');

test("Can set university with constructor", () => {
  const testValue = "University of Utah";
  const emp = new intern("Alex", 1, "Alex@gmail.com", testValue);
  expect(emp.university).toEqual(testValue);
});

test("getRole() should return intern", () => {
  const testValue = "intern";
  const emp = new intern("Alex", 1, "Alex@gmail.com", "University of Utah");
  expect(emp.getRole()).toEqual(testValue);
});

test("Can get university via getUniversity()", () => {
  const testValue = "Univeristy of Utah";
  const emp = new intern("Alex", 1, "Alex@gmial.com", testValue);
  expect(emp.getUniversity()).toEqual(testValue);
});