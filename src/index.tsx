import ReactDOM from "react-dom";
import { bootstrap } from 'safetest/react';
import App from "./App.tsx";
import React from 'react';


const container = document.getElementById("app");
const element = <App />;

const isDev = process.env.NODE_ENV !== 'production';

bootstrap({
  element,
  //render: (element) => ReactDOM.render(element, container),
  // If using React 18:
   render: (element) =>  (ReactDOM as any).createRoot(container).render(element),

  // Add one of the following depending on your bundler...

  // Webpack:
  webpackContext: isDev && import.meta.webpackContext('.', {
    recursive: true,
    regExp: /\.safetest$/,
    mode: 'lazy'
  })

  // Vite:
  // importGlob: isDev && import.meta.glob('./**/*.safetest.{j,t}s{,x}'),

  // Using the `npx safetest generate-import-map src/Bootstrap.tsx src > src/imports.tsx` syntax:
  // imports, // Where imports is defined as `import imports from './imports';`

  // Other:
  // import: isDev && async (s) => import(`${s.replace(/.*src/, '.').replace(/\.safetest$/, '')}.safetest`),

});