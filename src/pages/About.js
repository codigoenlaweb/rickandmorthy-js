import olmos from "@image/olmos.jpg";

const About = () => {
    const view = `
    <section class="py-2 px-4 sm:px-8 sm:py-4">
      <article
        class="mb-2 flex flex-col items-center bg-white rounded-md shadow-md w-full py-2 px-4 sm:px-8 sm:py-4 text-center"
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
    </section>
    `;
  
    return view
  };
  
  export default About