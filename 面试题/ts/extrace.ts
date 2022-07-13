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