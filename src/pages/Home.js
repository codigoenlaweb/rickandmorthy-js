import getData from '../utils/getData.js'

const Home = async () => {
  const characters = await getData()
  let template = ''
  characters.results.map(character => {
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
    `
  })

  const view = `
  <div class="py-2 px-4 sm:px-8 sm:py-4">
    <div class=" grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:gap-x-6 max-w-screen-lg mx-auto">
      ${template}
    </div>
  </div>  
  `;

  return view
};

export default Home