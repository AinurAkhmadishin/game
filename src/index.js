import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme'
import './index.css';
import './reset.css'

import WrappedApp from "./components/app/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <WrappedApp />
      </ChakraProvider>
  </React.StrictMode>
);

