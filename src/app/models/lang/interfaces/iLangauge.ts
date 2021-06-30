import { IBase } from "../../base";
import { ILabel } from "./ILabel";

export interface ILangauge extends IBase {
    name: string;
    code: string;
    labels?: Array<any> | any;
}

export interface ILangaugeLabel extends IBase {
    languageId: string;
    labelId: string;
}
  