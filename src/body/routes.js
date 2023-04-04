import Dashboard from './dashboard/index';
import Edit from './Edit/index';
import Error from './Error/index';

const AllRoutes = [
    { path: '/', component: Dashboard },
    { path: '/edit', component: Edit },
    { path: '/*', component: Error }
]

export default AllRoutes;