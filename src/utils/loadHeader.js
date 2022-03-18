import Header from '@template/Header.js';

const loadHeader = async () => {
    const header = document.querySelector('#header');
    header.insertAdjacentHTML("beforeend", await Header())
}

export default loadHeader