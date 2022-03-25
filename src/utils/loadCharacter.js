class loadCharacter {
  _page = 1;
  _maxPage = 42;
  _pageFilter = 0;
  _maxPageFilter = 0;
  _loading = false;
  URL = "https://rickandmortyapi.com/api/character/";
  nameOfCharacter = "";
  statusOfCharacter = "";
  options = {
    rootMargin: "400px",
    threshold: 0.1,
  };

  /* CHARACTER */
  query = async () => {
    this.page++;
    const urlResult = `${this.URL}?page=${this.page}`;
    const response = await fetch(urlResult);
    const data = await response.json();
    this.maxPage = data.info.pages;
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
              <h2 class="text-pink-700 text-lg mr-1">${character.name}</h2>
              <h2 class="text-gray-500 text-sm">${character.species}</h2>
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
    if (document.querySelector("#box-home")) {
      if (entries[0].isIntersecting & (this.page < this.maxPage)) {
        this.render();
      }
    }

    if (document.querySelector("#box-filter-character")) {
      if (entries[0].isIntersecting & (this.pageFilter < this.maxPageFilter)) {
        this.loadingFilterCharacter();
      }
    }
  };

  observer() {
    const observe = new IntersectionObserver(this.callback, this.options);
    observe.observe(document.querySelector("#load"));
  }

  rewind() {
    this.page = 1;
  }

  /* CHARACTER FILTER */
  clickFilter = (e) => {
    if (e.target === document.querySelector("#filter")) {
      e.preventDefault();
      document.querySelector("#loading").classList.remove("opacity-0");
      document.querySelector("#loading").classList.add("opacity-80");
      this.pageFilter = 0;
      if (!this._loading) {
        this._loading = true;
        this.responseFilter();
      }

      setTimeout(() => {
        if (document.querySelector("#loading")) {
          document.querySelector("#loading").classList.remove("opacity-80");
          document.querySelector("#loading").classList.add("opacity-0");
        }
      }, 1300);
    }
  };

  queryFilter = async () => {
    this.pageFilter++;
    this.nameOfCharacter = document.querySelector("#name").value;
    this.statusOfCharacter = document.querySelector("#status").value;

    const urlResult = `${this.URL}?page=${this.pageFilter}&name=${this.nameOfCharacter}&status=${this.statusOfCharacter}`;
    const response = await fetch(urlResult);
    const data = await response.json();
    if (data.info.pages) {
      this.maxPageFilter = data.info.pages;
    }
    return data;
  };

  responseFilter = async () => {
    const boxFilterCharacter = document.querySelector("#box-filter-character");
    try {
      if (boxFilterCharacter) {
        boxFilterCharacter.remove();
      }
      let characters = await this.queryFilter();
      await this.paintFilter(characters);

      setTimeout(() => {
        document
          .querySelector("#box-filter-character")
          .classList.remove("opacity-0");
        this._loading = false;
      }, 0);
    } catch (e) {
      if (boxFilterCharacter) {
        boxFilterCharacter.remove();
      }

      this.character404();

      document
        .querySelector("#box-filter-character")
        .classList.remove("opacity-0");

      this._loading = false;
    }
  };

  paintFilter = async (characters) => {
    let template = "";
    characters.results.map((character) => {
      template += `
        <article class="bg-white w-full rounded-xl shadow-md mb-4">
          <a href="#/filterc/${character.id}">
            <img
            class="w-full h-52 md:h-60 lg:h-72 rounded-t-xl object-cover"
            src="${character.image}"
            alt="name"
            />
            <div class="flex flex-wrap justify-between px-4 py-2 md:py-4 items-center">
              <h2 class="text-pink-700 text-lg mr-1">${character.name}</h2>
              <h2 class="text-gray-500 text-sm">${character.species}</h2>
            </div>
          </a>
        </article> 
      `;
    });
    const view = `
      <div id="box-filter-character" class="opacity-0 transition duration-300 ease-linear py-2 sm:py-4">
        <div id="box-card" class=" grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:gap-x-6 max-w-screen-lg mx-auto">
          ${template}
        </div>
      </div>
      `;

    await document
      .querySelector("#box-filter")
      .insertAdjacentHTML("afterend", view);
  };

  loadingFilterCharacter = async () => {
    let template = "";
    const character = await this.queryFilter();
    await character.results.map((character) => {
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
              <h2 class=" text-gray-500 text-sm">${character.species}</h2>
            </div>
          </a>
        </article> 
      `;
    });
    document
      .querySelector("#box-card")
      .insertAdjacentHTML("beforeend", template);
  };

  character404 = async () => {
    const view = `
    <div id="box-filter-character" class="opacity-0 transition duration-700 ease-linear py-2 sm:py-4">
      <div id="box-card" class="max-w-screen-lg mx-auto">
        <p class="font-bold py-2 w-full text-center mt-2 text-pink-600 text-2xl md:text-3xl">Character not found (≥o≤)</p>
      </div>
    </div>
    `;
    console.log(document.querySelector("#box-filter"));
    await document
      .querySelector("#box-filter")
      .insertAdjacentHTML("afterend", view);
  };

  /* get and setter */

  // PAGE
  get page() {
    return this._page;
  }

  set page(nmr) {
    return (this._page = nmr);
  }

  // MAX PAGE
  get maxPage() {
    return this._maxPage;
  }

  set maxPage(nmr) {
    return (this._maxPage = nmr);
  }

  // PAGE FILTER
  get pageFilter() {
    return this._pageFilter;
  }

  set pageFilter(nmr) {
    return (this._pageFilter = nmr);
  }

  // MAX PAGE FILTER
  get maxPageFilter() {
    return this._maxPageFilter;
  }

  set maxPageFilter(nmr) {
    return (this._maxPageFilter = nmr);
  }
}

export default loadCharacter;
