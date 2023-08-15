import React from 'react';
import { Button } from '@mui/material';

const Logout = ({ onLogout }) => {
    const handleLogout = () => {
        // Call the onLogout function passed from the parent component
        if (typeof onLogout === 'function') {
            onLogout();
        }
    };

    return (
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default Logout;


