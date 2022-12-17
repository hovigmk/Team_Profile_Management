const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return the values according to the employee object", () => {
      const employee = new Employee("Hovig", 2, "example@gmail.com");

      expect(employee.name).toEqual("Hovig");
      expect(employee.id).toEqual("2");
      expect(employee.email).toEqual("example@gmail.com");
    });
  });
});
