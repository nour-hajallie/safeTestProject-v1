import { describe, it, expect } from 'safetest/jest';
import { render } from 'safetest/react';
import React from 'react';
import App from './App.tsx';
import { chromium, firefox, webkit } from 'playwright';

// Whole App testing
describe('App', () => {
  jest.setTimeout(120000); // Set timeout to 90 seconds for the entire test suite

  it('renders without crashing nh', async () => {
    console.log("hello before rendering");

    // Increase timeout for this specific test
    const { page } = await render(<App />); // Set timeout to 60 seconds

    console.log("hello after rendering");

    await expect(page.locator('text=Welcome to The App')).toBeVisible();
  });
});
