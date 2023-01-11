const engineer = require('./lib/engineer');

test("Can set GitHUb with constructor", () => {
  const testValue = "GitHubUser";
  const e = new engineer("Alex", 1, "Alex@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() return engineer", () => {
  const testValue = "ngineer";
  const e = new engineer("Alex", 1, "Alex@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new engineer("Alex", 1, "Alex@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});