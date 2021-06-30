import { IBase } from "../../base";
import { ComponentModel } from "../componentModel";

export interface ILabel extends IBase {
    name: string;
    components?: Array<ComponentModel>;
}

export interface ILabelComponent extends IBase {
    labelId: string;
    componentId: string;
}
  