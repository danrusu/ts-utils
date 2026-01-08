import { DEBUG5 } from './module';

const info1 = DEBUG1.info(); // OK: DEBUG is defined in types.d.ts as global (ambient context)

const info2 = DEBUG2.info(); // OK: DEBUG2 is defined in the global scope

//@ts-expect-error DEBUG3 is not defined in this scope (it is defined in Usage1.ts module)
const info3 = DEBUG3.info(); // ERROR: DEBUG3 is not defined in this scope

const info4 = DEBUG4.info(); // OK: DEBUG4 is defined in module.d.ts in the global scope

const info5 = DEBUG5.info(); // OK: DEBUG5 is imported from module.d.ts module export
