import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import { useColorScheme } from 'react-native';

import Routes from './src/routes'
import themes from './src/theme';
import SwithButtonTheme from './src/components/ToggleTheme/index'

const App = () => {
    // const deviceTheme = useColorScheme();
    // const themeSystem = themes[deviceTheme] || dark;

    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? themes.dark : themes.light);
    }
    
  return(
    <ThemeProvider theme={theme}>
        <SwithButtonTheme toggleTheme={toggleTheme}/>
        <Routes />
    </ThemeProvider>
    ) 
}

export default App;
