const Manager = require("../lib/Manager");
const manager = new Manager("Hovig", "2", "example@gmail.com", "123");
describe("Manager", () => {
  describe("Initialization", () => {
    it("should return the values according to the manager object", () => {
      expect(manager.name).toEqual("Hovig");
      expect(manager.id).toEqual("2");
      expect(manager.email).toEqual("example@gmail.com");
      expect(manager.officeNumber).toEqual("123");
    });
  });
  describe("getname", () => {
    it("should return the name of the manager", () => {
      expect(manager.getName()).toEqual("Hovig");
    });
  });
  describe("getid", () => {
    it("should return the id of the manager", () => {
      expect(manager.getId()).toEqual("2");
    });
  });
  describe("getemail", () => {
    it("should return the email of the manager", () => {
      expect(manager.getEmail()).toEqual("example@gmail.com");
    });
  });
  describe("getofficenumber", () => {
    it("should return the officenumber of the manager", () => {
      expect(manager.getOfficeNumber()).toEqual("123");
    });
  });
  describe("getRole", () => {
    it("should return the role of the manager", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
