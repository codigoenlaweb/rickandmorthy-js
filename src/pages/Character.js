import getData from "../utils/getData.js"
import getHas from "../utils/getHas.js"

const Character = async () => {
  const character = await getData(getHas())

  const view =`
  <section class="px-4 py-2">
    <div class="bg-white px-4 py-2 rounded-lg shadow">
      <article>
        <img
          class="mx-auto mt-2 rounded-lg w-4/5 max-w-xs"
          src="${character.image}"
          alt="name"
        />
        <h2
          class="mt-2 text-center text-2xl font-bold text-pink-600 italic drop-shadow-2xl"
        >
          ${character.name}
        </h2>
      </article>
      <article class="mt-4 mb-2">
        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">
          Episodes:
          <p class="ml-1 text-gray-500 text-base font-normal">${character.episode.length}</p>
        </h3>
        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">
          Status:
          <p class="ml-1 text-gray-500 text-base font-normal">${character.status}</p>
        </h3>
        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">
          Specie:
          <p class="ml-1 text-gray-500 text-base font-normal">${character.species}</p>
        </h3>
        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">
          Gender:
          <p class="ml-1 text-gray-500 text-base font-normal">${character.gender}</p>
        </h3>
        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">
          Origin:
          <p class="ml-1 text-gray-500 text-base font-normal">${character.origin.name}</p>
        </h3>
        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">
          Last location:
          <p class="ml-1 text-gray-500 text-base font-normal">${character.location.name}</p>
        </h3>
      </article>
    </div>
  </section>
  `
  return view
}

export default Character
