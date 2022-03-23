import olmos from "@image/olmos.jpg";

const About = () => {
    const view = `
    <section class="py-2 px-4 sm:px-8 sm:py-4">
      <article
        class="mb-5 md:mb-10 flex flex-col items-center bg-white rounded-md shadow-md w-full py-2 px-4 sm:px-8 sm:py-4 text-center"
      >
        <h2 class="text-xl md:text-2xl text-cyan-600 mb-4 font-bold font-mono animate-pulse">A world of magic behind a button</h2>
        <img class="contrast-100 md:w-1/3 max-w-xs rounded-lg" src="${olmos}">

        <h2 class="mt-4 md:mt-6 text-pink-600 text-lg md:text-xl font-mono">!Hi, i'm Jesus Olmos<span id="machine-write"></span></h2>

        <h3 class="md:mt-2 text-gray-600">
          I am a Full stack developer focused on the Backend with experience in Web development.
          I am looking to collaborate in different areas of a project, whether in the development
          of Restful APIS or 100% dynamic web applications, I am interested in learning new technologies
          and languages that help me progress as a developer and provide value to the company.
        </h3>
      </article>

      <article
        class="flex flex-col bg-white rounded-md shadow-md w-full py-2 px-4 sm:px-8 sm:py-4 text-center"
      >
        <h2 class="text-xl md:text-2xl text-cyan-600 mb-2 font-bold font-mono animate-pulse">That was used to make this website</h2>

        <h2 class="text-pink-600 text-lg md:text-xl font-mono">Rick and Morty api</h2>

        <h3 class="md:mt-2 text-gray-600">
          The Rick and Morty API is a REST and GraphQL API based on the TV show
          Rick and Morty is the brainchild of Justin Roiland and Dan Harmon for Adult Swim.
          With this API, he made the requests to obtain the data of the characters of this series.
        </h3>
      </article>
    </section>

    <footer class=" bg-neutral-800 py-2 px-4 sm:px-8 sm:py-4">
      <h4 class="mb-2 md:mb-4 text-lg font-bold text-white text-center">Jesus Olmos | Codigoenlaweb</h4>
      <ul class="w-full flex flex-col items-center sm:flex-row flex-wrap sm:justify-around">
        <li class="text-gray-300 pr-1" >+58 412-0529358></li>
        <li class="text-gray-300 px-1">olmosjesus@gmail.com</li>
        <li class="px-1"><a class="text-gray-300 hover:text-white transition duration-150 ease-linear" href="https://github.com/codigoenlaweb" target="_blank">Github</a></li>
        <li class="pl-1"><a class="text-gray-300 hover:text-white transition duration-150 ease-linear" href="http://www.linkedin.com/in/jesus-armando-olmos-olmos-607748228" target="_blank">Linkedin</a></li>
      </ul>
    </footer>
    `;
  
    return view
  };
  
  export default About