import React from 'react';
import { Router } from 'react-router-dom';
import { AppProvidersProps } from './AppProviders.types';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../config/theme";
import {cHistory} from "../config/history";


export const AppProviders = ({ children }: AppProvidersProps) => (
  <ChakraProvider theme={theme}>
    <Router history={cHistory}>
      {children}
    </Router>
  </ChakraProvider>);
