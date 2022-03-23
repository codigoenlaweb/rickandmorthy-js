import Home from '@pages/Home.js';
import Character from '@pages/Character.js';
import Error404 from '@pages/Error404.js';
import getHas from '@utils/getHas.js';
import resolveRoutes from '@utils/resolveRoutes.js';
import About from '@pages/About.js';
import Filter from '@pages/Filter.js';

const routes = {
    '/': Home,
    '/:id':Character,
    '/:about':About,
    '/:filter':Filter,
}

const router = async () => {
    const main = document.querySelector('#main');

    let hash = getHas()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404

    main.insertAdjacentHTML("beforeend", await render())
    return route
}

export default router