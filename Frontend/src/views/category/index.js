// material-ui
import { Typography } from '@mui/material';
import CategoryTable from './CategoryTable';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Category = () => (
    <MainCard title="Category">
        <Typography variant="body2">
        Indulge your love for reading in the Book Category of our Library Management System. Crafted with book lovers in mind, this section invites you to explore a sweeping assortment of literary gems. Our objective is clear: to furnish you with an extensive selection of books, accompanied by a streamlined borrowing process. We empathize with the demands of student life, hence our commitment to simplifying book searches and lending. Immerse yourself in our curated collection, and relish the ease of borrowing your desired books from our library. Your literary journey begins here.
        </Typography>
        <CategoryTable/>
    </MainCard>
);

export default Category;
