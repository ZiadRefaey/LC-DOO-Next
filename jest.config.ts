module.exports = {
  preset: "ts-jest", // Tells Jest to use ts-jest for TypeScript files
  testEnvironment: "jsdom", // Use jsdom for a browser-like environment
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Extend Jest with custom DOM assertions
};
