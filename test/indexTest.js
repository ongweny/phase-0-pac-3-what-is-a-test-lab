require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(Name).toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(Height).toBeMoreThan(0)
      expect(Height).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(Message).toInclude(Name);
      expect(Message).toInclude(Height);
    });
  });
});
