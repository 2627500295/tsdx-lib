import { PersonOptions } from "./interfaces/person-options.interface";

export class person {
  constructor(options: Partial<PersonOptions>) {
    Object.assign(this, options);
  }
}
