import { JSONSchema } from "objection";
import { Schema, Table } from "../../../database";
import { BaseModel } from "../base";
import { IComponent } from "./interfaces";
import { LabelModel } from "./labelModel";
import { ComponentValidation } from "./validation";

export class ComponentModel extends BaseModel implements IComponent {
    name!: string;
    feilds!: string;
    labelId!: string;

    static get tableName(): string {
        return `${Schema.lafiaService}.${Table.components}`;
    }
      
    static get hidden(): string[] {
        return ['updatedAt', 'createdAt'];
    }

    static get jsonSchema(): JSONSchema {
        return ComponentValidation;
    }

    static get relationMappings() {
        return {
            label: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: LabelModel,
                join: {
                    from: `${Schema.lafiaService}.${Table.components}.label_id`,
                    to: `${Schema.lafiaService}.${Table.labels}.id`
                }
            }
        }
    }
}