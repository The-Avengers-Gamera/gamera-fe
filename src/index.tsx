import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <App />
          </StyledThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
