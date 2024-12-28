/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: ["**/tests/**/*.test.ts"],
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};