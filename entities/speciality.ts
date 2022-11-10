export enum specialities {
  LNIG = "LNIG",
  BIS = "BIS",
  BI = "BI",
  LNG = "LNG",
  LNE = "LNE",
}

export class speciality {
  name: string;

  constructor(name: string) {
    if (!name || name.length < 1) {
      throw new Error("Speciality must have a name");
    }
    if (!Object.keys(specialities).includes(name)) {
      throw new Error("Speciality must be valid in the enum");
    }
    this.name = name;
  }
}
