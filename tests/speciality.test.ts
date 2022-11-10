import { speciality } from "../entities/speciality"

describe('speciality creation', () => {

    it('should create new speciality', () => {
      const newSpeciality = new speciality('BIS');
      expect(newSpeciality.name).toEqual('BIS');
    })

    it('should throw error on empty speciality name', () => {
      expect(() => {
        new speciality('')
      }).toThrowError();
    })
    
    it('should throw an error on invalid speciality', () => {
      expect(() => {
        new speciality('lnig')
      }).toThrowError();
    })
})