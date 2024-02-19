import ReactDOM from 'react-dom';
import {App} from './App.tsx';
import { bootstrap } from 'safetest/react';
import React from 'react';

const container = document.getElementById("app");
const element = <App admin={true}/>;

const isDev = process.env.NODE_ENV !== 'production';

const elementArray = [element];

bootstrap({
  element:elementArray,
  render: (element) => ReactDOM.render(elementArray,container),

  // Webpack:
  webpackContext: isDev && import.meta.webpackContext('.', {
    recursive: true,
    regExp: /\.safetest$/,
    mode: 'lazy'
  })
});