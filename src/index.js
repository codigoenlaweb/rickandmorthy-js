import router from '@routes'
import '@styles';
import ico from '@image/ico.jpg'
import opacity from '@utils/opacity.js'
import changeRoute from '@utils/changeRoute.js'

document.querySelector("link").href = ico

window.addEventListener("load", router);

window.addEventListener('hashchange', () => {
    opacity()
    setTimeout(async () => {
        await changeRoute()
        await router()
        opacity()
    }, 200);
});

