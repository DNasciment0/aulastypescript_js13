import { Pessoa } from "./Pessoa";

export class Atleta extends Pessoa {
  public dormir(): void {
    throw new Error("Method not implemented.");
  }
  public cansar(): void {
    throw new Error("Method not implemented.");
  }
}
