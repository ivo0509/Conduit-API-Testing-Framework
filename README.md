# SoftUni Playwright API Testing Framework

A comprehensive API testing framework built with Playwright for testing the Conduit API. This project demonstrates best practices for API automation testing, including fixtures, test data management, and end-to-end test scenarios.

## Project Structure

```
├── fixtures/               # Reusable test fixtures and utilities
│   ├── 05. test-options.ts  # Custom test configuration and options
│   └── api/
│       ├── 02. plain-function.ts     # Plain function utilities
│       ├── 03. types.ts              # TypeScript type definitions
│       ├── 04. api-request-fixture.ts # API request fixture
│       └── schemas.ts                # Zod schemas for validation
├── tests/                  # Test specifications
│   ├── customAPITest.spec.ts    # Custom API tests
│   ├── defaultAPITest.spec.ts   # Default API tests
│   └── E2E.spec.ts              # End-to-end tests
├── test-data/              # Test data files
│   └── 06. test-data.json  # Test data for API requests
├── playwright-report/      # Test execution reports
├── test-results/           # Test results directory
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

## Requirements

- Node.js 18 or higher
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Configuration

Configure your test environment in `playwright.config.ts`:

- Base URL: `https://conduit-api.bondaracademy.com/api/`
- Authentication: JWT token-based
- Test browser: Chromium

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test tests/E2E.spec.ts

# Run tests with UI mode
npm run test:ui

# Generate HTML report
npm run test:report
```

## Key Features

- **Custom Fixtures**: Reusable API request fixtures with type safety
- **Schema Validation**: Zod-based schema validation for API responses
- **Test Data Management**: Centralized test data in JSON format
- **E2E Testing**: Complete Article CRUD operations testing
- **Type Safety**: Full TypeScript support for type-safe tests

## Test Examples

### Authentication
Tests include automatic user authentication with JWT token generation for protected API endpoints.

### Article CRUD Operations
The E2E test covers:
- Create article
- Update article
- Delete article
- Verify deletion

### Schemas
Validated using Zod schemas for:
- User authentication
- Article data

## Dependencies

- **@playwright/test**: Core testing framework
- **zod**: Schema validation library
- **TypeScript**: Language and type checking

## Author

SoftUni Materials
