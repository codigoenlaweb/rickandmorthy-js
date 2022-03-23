const linksClick = (e) => {
  const link = e.target;
  const linkHome = document.querySelector("#linkHome");
  const linkFilter = document.querySelector("#linkFilter");
  const linkAbout = document.querySelector("#linkAbout");

  if (link === linkHome || link === linkFilter || link === linkAbout) {
    if (linkHome.classList.contains("text-pink-600") & (linkHome != link)) {
      linkHome.classList.remove("text-pink-600");
      linkHome.classList.add("text-gray-500");
    }

    if (linkFilter.classList.contains("text-pink-600") & (linkFilter != link)) {
      linkFilter.classList.remove("text-pink-600");
      linkFilter.classList.add("text-gray-500");
    }

    if (linkAbout.classList.contains("text-pink-600") & (linkAbout != link)) {
      linkAbout.classList.remove("text-pink-600");
      linkAbout.classList.add("text-gray-500");
    }

    link.classList.add("text-pink-600");
    link.classList.remove("text-gray-500");
  }
};

export default linksClick