module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  clearMocks: true,
  resetMocks: true,
  testResultsProcessor: 'jest-sonar-reporter',
  coverageDirectory: 'coverage',
  // Indicates whether each individual test should be reported during the run.
  verbose: false,
  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    // '<rootDir>/src/app/models/',
    // '<rootDir>/src/app/repository/',
    // '<rootDir>/src/database/',
    // '<rootDir>/src/tests/fixtures/',
  ],
  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    // '<rootDir>/src/app/models/',
    // '<rootDir>/src/app/repository/',
    // '<rootDir>/src/database/',
    // '<rootDir>/src/tests/fixtures/',
  ],
};
