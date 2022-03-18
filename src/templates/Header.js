import logo from '@image/logo.png';
import logomi from '@image/logo(1).png';
const Header = () => {
  const view =`
  <div class="py-2 px-4 sm:px-8 sm:py-4">
      <div
        class="px-4 py-2 md:py-4 flex flex-wrap justify-between shadow-md bg-white rounded-lg max-w-screen-lg mx-auto"
      >
        <img width="168" height="44" class="" src="${logomi}" alt="logo" />
        <nav class="flex flex-wrap items-center">
          <ul class="flex">
            <li>
              <a id="linkHome" class="text-lg text-gray-500 font-medium mr-4 transition-all duration-300 ease-linear" href="#/"
                >Home</a
              >
            </li>
            <li>
              <a id="linkFilter" class="text-lg text-gray-500 font-medium mr-4 transition-all duration-300 ease-linear" href="#/filter"
                >Filter</a
              >
            </li>

            <li>
              <a id="linkAbout" class="text-lg text-gray-500 font-medium transition-all duration-300 ease-linear" href="#/about"
                >About</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  `;
  return view
}

export default Header;