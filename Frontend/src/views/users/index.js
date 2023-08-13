// material-ui
import { Typography } from '@mui/material';
import UserTable from './UsersTable';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const Users = () => (
  <MainCard title="Admins">
  <Typography variant="body2">
  Welcome to the Admin section of the Library Management System. This page is dedicated to all the users who are registered in the library.
  </Typography>
  <UserTable/>
</MainCard>
);

export default Users;
