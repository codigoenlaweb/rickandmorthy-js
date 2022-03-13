import router from '@routes'
import '@styles';
import ico from '@image/ico.jpg'
import opacity from '@utils/opacity.js'
import changeRoute from '@utils/changeRoute.js'
import loadCharacter from '@utils/loadCharacter.js'

// Inicializacion
const load = new loadCharacter()

document.querySelector("link").href = ico

window.addEventListener("load", async () => {
    let route = await router()
    await load.observer()  
    if (route === '/') {
        load.activate = true 
    }
});

window.addEventListener('hashchange', () => {
    opacity()
    load.activate = false
    setTimeout(async () => {
        await changeRoute()
        const route = await router()
        if (route === '/') {
            load.activate = true
        }
        opacity()
    }, 200);
});



