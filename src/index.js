import router from './routes/index.js'
import './styles/style.css';
import ico from './assets/images/ico.jpg'

document.querySelector("link").href = ico

window.addEventListener("load", router);

window.addEventListener('hashchange', router);