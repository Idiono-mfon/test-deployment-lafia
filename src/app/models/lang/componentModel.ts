import { JSONSchema } from "objection";
import { Schema, Table } from "../../../database";
import { BaseModel } from "../base";
import { IComponent } from "./interfaces";
import { LanguageModel } from "./languageModel";
import { ComponentValidation } from "./validation";

export class ComponentModel extends BaseModel implements IComponent {
    name!: string;
    feilds!: string;

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
            languages: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: LanguageModel,
                join: {
                    from: `${Schema.lafiaService}.${Table.labels}.id`,
                    to: `${Schema.lafiaService}.${Table.languages}.label_id`
                }
            }
        }
    }
}