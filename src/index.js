// @flow

import React from 'react';
import reactDOM from 'react-dom';
import App from './App';

const rootElement = document.querySelector('#app');
if (rootElement !== null) reactDOM.render(<App />, rootElement);
