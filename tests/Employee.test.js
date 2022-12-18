const Employee = require("../lib/Employee");
const employee = new Employee("Hovig", "2", "example@gmail.com");
describe("Employee", () => {
  describe("Initialization", () => {
    it("should return the values according to the employee object", () => {
      expect(employee.name).toEqual("Hovig");
      expect(employee.id).toEqual("2");
      expect(employee.email).toEqual("example@gmail.com");
    });
  });
  describe("getname", () => {
    it("should return the name of the employee", () => {
      expect(employee.getName()).toEqual("Hovig");
    });
  });
  describe("getid", () => {
    it("should return the id of the employee", () => {
      expect(employee.getId()).toEqual("2");
    });
  });
  describe("getemail", () => {
    it("should return the email of the employee", () => {
      expect(employee.getEmail()).toEqual("example@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return the role of the employee", () => {
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
