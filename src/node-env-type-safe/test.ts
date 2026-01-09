import { assert } from 'node:console';
import { loadEnvFile } from 'node:process';

loadEnvFile('src/node-env-type-safe/.env');

// supose MY_ENV_VAR gets injected via some external means, e.g., a .env file or CI/CD pipeline

const myEnvVar = process.env.MY_ENV_VAR; // TypeScript should know this is a string due to the declaration below

assert(typeof myEnvVar === 'string', 'MY_ENV_VAR should be a string');

// runtime check
// if (!myEnvVar) {
//   throw new Error('MY_ENV_VAR is not defined');
// }

console.log(`MY_ENV_VAR is set to: ${myEnvVar}`);

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ENV_VAR: string;
    }
  }
}
