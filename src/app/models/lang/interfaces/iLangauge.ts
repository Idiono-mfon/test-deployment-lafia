import { IBase } from "../../base";

export interface ILangauge extends IBase {
    name: string;
    code: string;
}

export interface ILangaugeLabel extends IBase {
    languageId: string;
    labelId: string;
}
  