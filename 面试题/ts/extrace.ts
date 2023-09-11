// function isEqual <T extends object, K extends object>
// (
// obj1: T, 
// obj2: K, 
// fields: Array<Extract<keyof T, keyof K>>
// ): boolean {
//   return fields.every((field) => trim(obj1[field]) === trim(obj2[field]));
// }

export function isEqual<T extends object, K extends object>(obj1: T, obj2: K, fields: Array<Extract<keyof T, keyof K>>): boolean {
  return fields.every((field) => obj1[field] as any === obj2[field]);
}


isEqual({ a: 1 }, { a: 2, b: 1 }, ['']);


type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Require<T> = {
  [P in keyof T]-?: T[P]
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};


extends
keyof
in
readyonly
exclude
extract