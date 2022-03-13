import router from "@routes";

class loadCharacter {
  page = 1;
  activate = false;
  URL = "https://rickandmortyapi.com/api/character/";
  options = {
    rootMargin: "400px",
    threshold: 0.1,
  };

  query = async () => {
    this.page++;
    const urlResult = `${this.URL}?page=${this.page}`;
    const response = await fetch(urlResult);
    const data = await response.json();
    return data;
  };

  render = async () => {
    let template = "";
    const character = await this.query();
    character.results.map((character) => {
      template += `
        <article class="bg-white w-full rounded-xl shadow-md mb-4">
          <a href="#/${character.id}">
            <img
              class="w-full h-52 md:h-60 lg:h-72 rounded-t-xl object-cover"
              src="${character.image}"
              alt="name"
            />
            <div class="flex flex-wrap justify-between px-4 py-2 md:py-4 items-center">
              <h2 class=" text-pink-700 text-lg mr-1">${character.name}</h2>
              <h2 class=" text-gray-400 text-sm">${character.species}</h2>
            </div>
          </a>
        </article> 
        `;
    });
    document
      .querySelector("#box-card")
      .insertAdjacentHTML("beforeend", template);
  };

  callback = async (entries, observer) => {
    if (this.activate & entries[0].isIntersecting) {
      this.render();
      console.log('hola');
    }
  };

  observer() {
    const observe = new IntersectionObserver(this.callback, this.options);
    observe.observe(document.querySelector("#load"));
  }
}

export default loadCharacter;
