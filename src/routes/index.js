import Header from '@template/Header.js';
import Home from '@pages/Home.js';
import Character from '@pages/Character.js';
import Error404 from '@pages/Error404.js';
import getHas from '@utils/getHas.js';
import resolveRoutes from '@utils/resolveRoutes.js';

const routes = {
    '/': Home,
    '/:id':Character
}

const router = async () => {
    const header = document.querySelector('#header');
    const main = document.querySelector('#main');

    header.insertAdjacentHTML("beforeend", await Header())
    let hash = getHas()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404

    main.insertAdjacentHTML("beforeend", await render())
    return route
}

export default router