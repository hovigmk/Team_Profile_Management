const Intern = require("../lib/Intern");
const intern = new Intern("Hovig", "2", "example@gmail.com", "UofT");
describe("Intern", () => {
  describe("Initialization", () => {
    it("should return the values according to the intern object", () => {
      expect(intern.name).toEqual("Hovig");
      expect(intern.id).toEqual("2");
      expect(intern.email).toEqual("example@gmail.com");
      expect(intern.school).toEqual("UofT");
    });
  });
  describe("getname", () => {
    it("should return the name of the intern", () => {
      expect(intern.getName()).toEqual("Hovig");
    });
  });
  describe("getid", () => {
    it("should return the id of the intern", () => {
      expect(intern.getId()).toEqual("2");
    });
  });
  describe("getemail", () => {
    it("should return the email of the intern", () => {
      expect(intern.getEmail()).toEqual("example@gmail.com");
    });
  });
  describe("getschool", () => {
    it("should return the school of the intern", () => {
      expect(intern.getSchool()).toEqual("UofT");
    });
  });
  describe("getRole", () => {
    it("should return the role of the intern", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
