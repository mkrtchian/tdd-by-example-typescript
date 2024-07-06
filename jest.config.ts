import type { Config } from "jest";

const config: Config = {
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFilesAfterEnv: ["jest-extended/all"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};

export default config;
