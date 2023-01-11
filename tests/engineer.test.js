const engineer = require('../lib/engineer');

test("Can set GitHUb with constructor", () => {
  const testValue = "GitHubUser";
  const emp = new engineer("Alex", 1, "Alex@gmail.com", testValue);
  expect(emp.github).toEqual(testValue);
});

test("getRole() return engineer", () => {
  const testValue = "ngineer";
  const emp = new engineer("Alex", 1, "Alex@gmail.com", "GitHubUser");
  expect(emp.getRole()).toEqual(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const emp = new engineer("Alex", 1, "Alex@gmail.com", testValue);
  expect(emp.getGithub()).toEqual(testValue);
});