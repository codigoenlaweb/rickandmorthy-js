import logo from '../assets/images/logo.png';

const Header = () => {
    const view =`
    <div class="py-2 px-4 sm:px-8 sm:py-4">
      <div class="px-4 py-2 md:py-4 flex flex-wrap justify-between bg-white rounded-lg max-w-screen-lg mx-auto">
      <a href="#">
        <img class="h-10" src="${logo}" alt="logo" />
      </a>
        <nav class="flex items-center">
          <a class=" text-lg text-pink-700 font-medium" href="#/abut">About</a>
        </nav>
      </div>
    </div>
    `;
    return view
}

export default Header;