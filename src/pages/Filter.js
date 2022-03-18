import loading from "@image/loading.svg";

const Filter = () => {
    const view = `
    <div id="loading" class="flex text-pink-600 transition duration-300 ease-linear font-semibold absolute top-1 right-1 opacity-0 bg-cyan-500 px-4 py-2 rounded-lg">loading<img src="${loading}" alt="loading"></div>
    <section class="py-2 px-4 sm:px-8 sm:py-4">
      <article
        class="flex flex-col bg-white rounded-lg shadow-md w-full px-2 py-2 sm:py-3 text-center" id="box-filter"
      >
        <form class="flex flex-col sm:flex-row items-center sm:justify-center">
          <input
            class="w-full max-w-xs placeholder:text-gray-500 transition ease-linear duration-300 focus:outline-none focus:border-cyan-500 bg-gray-200 rounded-md px-2 text-gray-600 border-2 border-solid border-gray-400"
            type="text"
            placeholder="Name of the character"
            id="name"
            name="name"
          />
          <div class="flex flex-wrap mt-4 sm:mt-0">
            <select
              class="mx-2 text-gray-600 bg-gray-200 focus:border-cyan-500 transition ease-linear duration-300 border-gray-400 border-2 border-solid rounded-md focus:outline-none px-2"
              name="status"
              id="status"
            >
              <option value="" selected>Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>

            <input
              class="px-2 focus:outline-none focus:bg-cyan-600 focus:border-cyan-600 focus:shadow-md hover:bg-cyan-600 hover:border-cyan-600 hover:shadow-md hover:text-gray-100 font-bold bg-cyan-500 text-white border-2 border-solid border-cyan-600 rounded-md transition duration-150 ease-linear"
              type="submit"
              value="filter"
              id="filter"
              name="filter"
            />
          </div>
        </form>
      </article>
    </section>
    `;
  
    return view
  };
  
  export default Filter