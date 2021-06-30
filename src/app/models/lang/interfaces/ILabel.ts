import { IBase } from "../../base";

export interface ILabel extends IBase {
    name: string;
}

export interface ILabelComponent extends IBase {
    labelId: string;
    componentId: string; 
}
  