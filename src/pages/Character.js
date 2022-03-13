import getData from "@utils/getData.js"
import getHas from "@utils/getHas.js"
import closeIco from "@image/close.svg"

const Character = async () => {
  const character = await getData(getHas())
  if (character.error) {
    const view = `
    <section class="py-2 px-4 sm:px-8 sm:py-4">
      <article
        class="flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"
      >
        <h2 class="text-2xl md:text-4xl text-pink-700 mb-4">Character not found</h2>
        <a class="text-cyan-600 font-bold underline w-32 mx-auto" href="#"
          ><p
            class="italic transition-all duration-300 hover:scale-125 mx-auto"
          >
            Go Home
          </p></a
        >
      </article>
    </section>
    `
    return view
  }else {
  const view =`
  <section class="px-4 py-2 sm:px-8 sm:py-4">
    <div class="bg-white px-4 py-2 rounded-lg shadow max-w-screen-lg mx-auto relative">
      <a class="absolute top-2 right-3" href="#" id="aClose">
        <img class=" w-7 sm:w-9" src="${closeIco}" alt="close character">
      </a>
      <article>
        <img
          class="mx-auto mt-8 rounded-lg w-4/5 max-w-xs"
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
}

export default Character
