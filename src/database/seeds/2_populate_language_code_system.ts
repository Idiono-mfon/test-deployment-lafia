import * as Knex from "knex";
import { Schema } from '../schema';
import { Table } from '../table';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(`${Schema.lafiaService}.${Table.code_systems}`).del();

  // Inserts seed entries
  await knex(`${Schema.lafiaService}.${Table.code_systems}`).insert([
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'ar',
      display: 'Arabic',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'bn',
      display: 'Bengali',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'cs',
      display: 'Czech',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'da',
      display: 'Danish',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'de',
      display: 'German',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'el',
      display: 'Greek',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'en',
      display: 'English',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'es',
      display: 'Spanish',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'fi',
      display: 'Finnish',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'fr',
      display: 'French',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'fy',
      display: 'Frysian',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'hi',
      display: 'Hindi',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'hr',
      display: 'Croatian',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'it',
      display: 'Italian',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'ja',
      display: 'Japanese',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'ko',
      display: 'Korean',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'nl',
      display: 'Dutch',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'no',
      display: 'Norwegian',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'pa',
      display: 'Punjabi',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'pl',
      display: 'Polish',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'pt',
      display: 'Portuguese',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'ru',
      display: 'Russian',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'sr',
      display: 'Serbian',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'sv',
      display: 'Swedish',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'te',
      display: 'Telegu',
    },
    {
      system: 'urn:ietf:bcp:47',
      type: 'language',
      code: 'zh',
      display: 'Chinese',
    },
  ]);
}
