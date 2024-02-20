import { describe, it, expect } from 'safetest/jest';
import { render } from 'safetest/react';
import React from 'react';
import App from './App.tsx';

// Whole App testing
describe('App', () => {
  jest.setTimeout(90000); // Set timeout to 10 seconds
console.log("hello");
  it('renders without crashing nh', async () => {
    const { page } = await render(<App admin={true}/>);
   await expect(page.locator('text=Welcome to The App')).toBeVisible();
  });
});