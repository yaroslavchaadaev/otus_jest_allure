export default {
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: ['**/specs/**/*.spec.*'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  reporters: ['default', 'jest-allure'],
  testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['jest-allure/dist/setup'],
  testEnvironment: 'allure-jest'
}
