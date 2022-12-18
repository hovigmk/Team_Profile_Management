const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Hovig", "2", "example@gmail.com", "hovigmk");
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return the values according to the engineer object", () => {
      expect(engineer.name).toEqual("Hovig");
      expect(engineer.id).toEqual("2");
      expect(engineer.email).toEqual("example@gmail.com");
      expect(engineer.github).toEqual("hovigmk");
    });
  });
  describe("getname", () => {
    it("should return the name of the engineer", () => {
      expect(engineer.getName()).toEqual("Hovig");
    });
  });
  describe("getid", () => {
    it("should return the id of the engineer", () => {
      expect(engineer.getId()).toEqual("2");
    });
  });
  describe("getemail", () => {
    it("should return the email of the engineer", () => {
      expect(engineer.getEmail()).toEqual("example@gmail.com");
    });
  });
  describe("getgithub", () => {
    it("should return the officenumber of the engineer", () => {
      expect(engineer.getGithub()).toEqual("hovigmk");
    });
  });
  describe("getRole", () => {
    it("should return the role of the engineer", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
