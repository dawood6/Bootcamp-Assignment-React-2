import React from 'react';
import { render } from '@testing-library/react';
import App from "./app";

render(<App name="dawood"/>, document.getElementById('root'))