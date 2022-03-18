const resolveRoutes = (route) => {
  if (route === "/") {
    let validRoute = "/";
    // let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }

  if (route === "about") {
    let validRoute = "/:about";
    return validRoute;
  }

  if (route === "filter") {
    let validRoute = "/:filter";
    return validRoute;
  }

  if (!isNaN(route)) {
    let validRoute = "/:id";
    return validRoute;
  } else {
    return `/${route}`;
  }
};

export default resolveRoutes;
