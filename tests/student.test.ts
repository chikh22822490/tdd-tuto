import { student } from "../entities/student";

describe("student creation", () => {
  it("should create new student", async () => {
    const newStudent = new student("name", 2, "test@test.test", "LNIG", "INFO");
    expect(newStudent.name).toEqual("name");
    expect(newStudent.level).toEqual(2);
    expect(newStudent.email).toEqual("test@test.test");
    expect(newStudent.speciality.name).toEqual("LNIG");
    expect(newStudent.department.name).toEqual("INFO");
  });

  it("should throw error for empty student name", () => {
    expect(() => {
      new student("", 2, "test@test.test", "LNIG", "INFO");
    }).toThrowError();
  });

  it("should throw error for empty student level", () => {
    expect(() => {
      new student("name", 0, "test@test.test", "LNIG", "INFO");
    }).toThrowError();
  });

  it("should throw error for empty student email", () => {
    expect(() => {
      new student("name", 2, "", "LNIG", "INFO");
    }).toThrowError();
  });

  it("should throw error for empty student speciality", () => {
    expect(() => {
      new student("name", 2, "test@test.test", "", "INFO");
    }).toThrowError();
  });

  it("should throw error for empty student department", () => {
    expect(() => {
      new student("name", 2, "test@test.test", "LNIG", "");
    }).toThrowError();
  });
});
