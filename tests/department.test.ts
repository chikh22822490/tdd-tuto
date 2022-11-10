import { department } from "../entities/department"

describe('department creation', () => {
  it('should create a department', () => {
    const newDepartment = new department("INFO")
    expect(newDepartment.name).toEqual("INFO")
  })

  it('should throw error on empty department name', () => {
    expect(() => {
      new department('')
    }).toThrowError();
  })

  it('should throw an error on invalid speciality', () => {
    expect(() => {
      new department('info')
    }).toThrowError();
  })
})