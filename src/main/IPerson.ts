import INameable from "./INameable";

export default interface IPerson extends INameable {
  birthDate?: Date;
}
