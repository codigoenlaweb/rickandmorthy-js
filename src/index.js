import router from '@routes'
import '@styles';
import ico from '@image/ico.jpg'

document.querySelector("link").href = ico

window.addEventListener("load", router);

window.addEventListener('hashchange', router);

