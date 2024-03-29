// assets
import { IconNote, IconBook, IconUsers, IconSchool,IconLogout } from '@tabler/icons';

// constant
const icons = { IconNote, IconBook, IconUsers, IconSchool,IconLogout };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //
//<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-note" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'Records',
            title: 'Records',
            type: 'item',
            url: '/records',
            icon: icons.IconNote,
            breadcrumbs: false
        },
        {
            id: 'Books',
            title: 'Books',
            type: 'item',
            url: '/books',
            icon: icons.IconBook,
            breadcrumbs: false
        },
        {
            id: 'Category',
            title: 'Category',
            type: 'item',
            url: '/category',
            icon: icons.IconBook,
            breadcrumbs: false
        },
        {
            id: 'Students',
            title: 'Members',
            type: 'item',
            url: '/students',
            icon: icons.IconSchool,
            breadcrumbs: false
        },
        {
            id: 'Users',
            title: 'Admins',
            type: 'item',
            url: '/users',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'Logout',
            title: 'Logout',
            type: 'item',
            url: '/logout',
            icon: icons.IconLogout, // Use the imported IconLogout
            breadcrumbs: false
        }
    ]
};

export default other;
