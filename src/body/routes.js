import Dashboard from './dashboard/index';
import Edit from './edit/index';
import Error from './error/index';

const AllRoutes = [
    { path: '/', component: Dashboard },
    { path: '/edit', component: Edit },
    { path: '/*', component: Error }

]

export default AllRoutes;