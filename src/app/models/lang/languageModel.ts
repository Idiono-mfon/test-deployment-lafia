import { JSONSchema } from "objection";
import { Schema, Table } from "../../../database";
import { BaseModel } from "../base";
import { ILangauge } from "./interfaces";
import { LabelModel } from "./labelModel";
import { LanguageValidation } from "./validation";

export class LanguageModel extends BaseModel implements ILangauge {
    code: string;
    name: string;

    static get tableName(): string {
        return `${Schema.lafiaService}.${Table.languages}`;
    }

    static get hidden(): string[] {
        return ['updatedAt', 'createdAt'];
    }

    static get jsonSchema(): JSONSchema {
        return LanguageValidation;
    }

    static get relationMappings() {
        return {
            labels: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: LabelModel,
                join: {
                    from: `${Schema.lafiaService}.${Table.languages}.id`,
                    through: {
                        from: `${Schema.lafiaService}.${Table.language_label}.language_id`,
                        to: `${Schema.lafiaService}.${Table.language_label}.label_id`
                    },
                    to: `${Schema.lafiaService}.${Table.labels}.id`
                }
            }
        };
    }
}