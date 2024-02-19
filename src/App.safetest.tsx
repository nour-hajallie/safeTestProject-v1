import { describe, it, expect } from 'safetest/jest';
import { render } from 'safetest/react';
import React from 'react';
import App from './App.tsx';

// Whole App testing
describe('App', () => {
  jest.setTimeout(90000); // Set timeout to 10 seconds
console.log("hello");
  it('renders without crashing nh', async () => {
    console.log("hello i am here");

    const { page } = await render(<App admin={true}/>);

    console.log("hello i am here again ");

   await expect(page.locator('text=Welcome to The App')).toBeVisible();
  });
});