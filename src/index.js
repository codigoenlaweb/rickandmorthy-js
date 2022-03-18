import router from "@routes";
import "@styles";
import ico from "@image/ico.jpg";
import opacity from "@utils/opacity.js";
import changeRoute from "@utils/changeRoute.js";
import loadCharacter from "@utils/loadCharacter.js";
import loadHeader from "@utils/loadHeader";
import linksClick from "@utils/linksClick";
import loadLinks from "@utils/loadLinks"

// Inicializacion
const body = document.querySelector("#body");
const load = new loadCharacter();

document.querySelector("link").href = ico;

window.addEventListener("load", async () => {
  loadHeader();
  let route = await router();
  await load.observer();

  if (route === "/") {
    load.activate = true;
    loadLinks(document.querySelector("#linkHome"))
  }
  if (route === "/:about") {
    loadLinks(document.querySelector("#linkAbout"))
  }
  if (route === "/:filter") {
    loadLinks(document.querySelector("#linkFilter"))
  }
});

window.addEventListener("hashchange", () => {
  opacity();
  load.activate = false;
  setTimeout(async () => {
    await changeRoute();
    const route = await router();
    if (route === "/") {
      load.activate = true;
    }
    opacity();
  }, 200);
  load.rewind();
});

body.addEventListener("click", (e) => {
  linksClick(e)
  load.clickFilter(e)
});
