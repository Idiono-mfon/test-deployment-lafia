export enum ValueSetStatus {
  draft = 'draft',
  active = 'active',
  retired = 'retired',
  unknown = 'unknown',
}

export enum Comparator {
  lt = '<',
  lte = '<=',
  gt = '>',
  gte = '>=',
}

export enum filterOPCode {
  eq = '=',
  isA = 'is-a',
  descOf = 'descendent-of',
  isNotA = 'is-not-a',
  regex = 'regex',
  in = 'in',
  notIn = 'not-in',
  generalizes = 'generalizes',
  exists = 'exists',
}
