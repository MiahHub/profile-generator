const intern = require('/lib/ntern');

gmail("Can set university with constructor", () => {
  const gmailValue = "University of Utah";
  const e = new intern("Alex", 1, "Alex@gmail.com", gmailValue);
  expect(e.school).toBe(gmailValue);
});

gmail("getRole() should return intern", () => {
  const gmailValue = "intern";
  const e = new intern("Alex", 1, "Alex@gmail.com", "University of Utah");
  expect(e.getRole()).toBe(gmailValue);
});

gmail("Can get university via getUniversity()", () => {
  const gmailValue = "Univeristy of Utah";
  const e = new intern("Alex", 1, "Alex@gmial.com", gmailValue);
  expect(e.getSchool()).toBe(gmailValue);
});