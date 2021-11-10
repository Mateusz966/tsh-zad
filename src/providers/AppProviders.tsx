import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvidersProps } from './AppProviders.types';
import {ChakraProvider} from "@chakra-ui/react";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ChakraProvider>
    <Router>
      {children}
    </Router>
  </ChakraProvider>);
