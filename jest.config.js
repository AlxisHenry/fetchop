/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['tests'], // Répertoire racine des tests
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$', // Expression régulière pour les fichiers de test
  moduleFileExtensions: ['ts', 'js']
};

module.exports = config;