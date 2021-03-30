import { Ordine } from "./ordine";

export class Fattura {
    id:number;
    dataOrdine:Date;
    dataConsegna:Date;
    prezzo:number;
    ordini:Ordine[];
}