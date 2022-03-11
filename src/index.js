import router from './routes/index.js'
import './styles/style.css';

window.addEventListener("load", router);

window.addEventListener('hashchange', router);
