const activelink = (lLink) => {
  lLink.classList.remove("text-gray-500");
  lLink.classList.add("text-pink-600");
};

const desactivelink = (lLink) => {
  lLink.classList.remove("text-pink-600");
  lLink.classList.add("text-gray-500");
};

const desOrActivelink = (lLink) => {
  lLink.classList.toggle("text-pink-600");
  lLink.classList.toggle("text-gray-500");
};

const whatLinkIsActive = () => {
  if (document.querySelector("#linkHome").classList.contains("text-pink-600")) {
    desOrActivelink(document.querySelector("#linkHome"));
  }

  if (
    document.querySelector("#linkAbout").classList.contains("text-pink-600")
  ) {
    desOrActivelink(document.querySelector("#linkAbout"));
  }

  if (
    document.querySelector("#linkFilter").classList.contains("text-pink-600")
  ) {
    desOrActivelink(document.querySelector("#linkFilter"));
  }
};

const whichLinkWillBeActivated = (route) => {
  if (route === "/" || route === "/:id") {
    desOrActivelink(document.querySelector("#linkHome"));
  }
  if (route === "/:about") {
    desOrActivelink(document.querySelector("#linkAbout"));
  }
  if (route === "/:filter" || route === "/:filterc/:id") {
    desOrActivelink(document.querySelector("#linkFilter"));
  }
};

const loadLinks = (route) => {
  whatLinkIsActive();
  whichLinkWillBeActivated(route);
};

export default loadLinks;
