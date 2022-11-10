export enum departments {
  INFO = "INFO",
  GEST = "GEST",
  MKG = "MKG",
  COMP = "COMP",
}

export class department {
  name: string;

  constructor(name: string) {
    if (!name || name.length < 1) {
      throw new Error("Department must have a name");
    }
    if (!Object.keys(departments).includes(name)) {
        throw new Error("Department must be valid in the enum");
      }
    this.name = name;
  }
}
