const linksClick = (e) => {
  const link = e.target;
  const linkHome = document.querySelector("#linkHome");
  const linkFilter = document.querySelector("#linkFilter");
  const linkAbout = document.querySelector("#linkAbout");

  if (link === linkHome || link === linkFilter || link === linkAbout) {
    if (linkHome.classList.contains("text-pink-700") & (linkHome != link)) {
      linkHome.classList.remove("text-pink-700");
      linkHome.classList.add("text-gray-400");
    }

    if (linkFilter.classList.contains("text-pink-700") & (linkFilter != link)) {
      linkFilter.classList.remove("text-pink-700");
      linkFilter.classList.add("text-gray-400");
    }

    if (linkAbout.classList.contains("text-pink-700") & (linkAbout != link)) {
      linkAbout.classList.remove("text-pink-700");
      linkAbout.classList.add("text-gray-400");
    }

    link.classList.add("text-pink-700");
    link.classList.remove("text-gray-400");
  }
};

export default linksClick