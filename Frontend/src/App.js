import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import MainRoutes from 'routes/MainRoutes';
import LoginRoutes from 'routes/LoginRoutes';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const storedToken = localStorage.getItem('token');
    const [token, setToken] = useState(storedToken);
    const removeToken = () => {
        setToken(null); // Remove token from state
        localStorage.removeItem('token'); // Clear token from localStorage
    };


    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);
    

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                            {!token ?<LoginRoutes setToken={setToken}/>:<MainRoutes removeToken={removeToken} />}
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
