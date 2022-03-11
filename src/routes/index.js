import Header from '../templates/Header.js';
import Home from '../pages/Home.js';
import Character from '../pages/Character.js';
import Error404 from '../pages/Error404.js';
import getHas from '../utils/getHas.js';
import resolveRoutes from '../utils/resolveRoutes.js';


const routes = {
    '/': Home,
    '/:id':Character
}

const router = async () => {
    const header = document.querySelector('#header');
    const main = document.querySelector('#main');

    header.innerHTML = await Header()
    let hash = getHas()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404

    main.innerHTML = await render()
}

export default router