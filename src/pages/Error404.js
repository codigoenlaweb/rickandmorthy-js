const Error404 = () => {
    const view = `
    <section class="py-2 px-4 sm:px-8 sm:py-4">
      <article
        class="flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"
      >
        <h2 class="text-2xl md:text-4xl text-pink-700 mb-4">404 not found</h2>
        <a class="text-cyan-600 font-bold underline w-32 mx-auto" href="#"
          ><p
            class="italic transition-all duration-300 hover:scale-125 mx-auto"
          >
            Go Home
          </p></a
        >
      </article>
    </section>
    `;
  
    return view
  };
  
  export default Error404