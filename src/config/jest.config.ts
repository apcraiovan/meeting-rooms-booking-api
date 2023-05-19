// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//   };
  
//   module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     transform: {
//       '^.+\\.ts$': 'ts-jest',
//     },
//     moduleFileExtensions: ['ts', 'js'],
//     testMatch: ['**/tests/**/*.ts', '**/?(*.)+(spec|test).ts'],
//   };
  
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/tests/**/*.ts', '**/?(*.)+(spec|test).ts'],
  };
  
  