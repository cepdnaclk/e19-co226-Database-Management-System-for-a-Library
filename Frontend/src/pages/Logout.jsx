import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ removeToken }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = () => {
            removeToken();
            navigate('/');
            window.location.reload();
        };

        handleLogout(); // Call the logout function when the component mounts
    }, []);

    // Since there is no button or JSX to render, you can return `null`
    return null;
};

export default Logout;
