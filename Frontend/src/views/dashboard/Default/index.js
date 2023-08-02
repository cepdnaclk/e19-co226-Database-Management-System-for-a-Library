import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div>

        </div>
    );
};

export default Dashboard;
