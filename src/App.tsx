import React from 'react';

export const App= ({ admin }: { admin?: boolean }) => (
    <div>
      <h1>
        Welcome to The App
      </h1>
      <p>Test Nour React app</p>

      <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value=""
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value=""
            required
          />
        </div>
        <button type="submit">Submit</button>
    </div>
);
export default App; 