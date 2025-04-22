import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Introduce from '~/pages/Introduce';
import CheckPrice from '~/pages/CheckPrice';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Contact', component: Contact },
    { path: '/Introduce', component: Introduce },
    { path: '/CheckPrice', component: CheckPrice },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
