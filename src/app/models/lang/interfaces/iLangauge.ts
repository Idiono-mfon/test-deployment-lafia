import { IBase } from "../../base";
import { ILabel } from "./ILabel";

export interface ILangauge extends IBase {
    name: string;
    code: string;
    englishName?: string;
    labels?: Array<any> | any;
}

export interface ILangaugeLabel extends IBase {
    languageId: string;
    labelId: string;
}
  
export interface ILanguageComponent extends IBase {
    languageId: string;
    componentId: string;
}