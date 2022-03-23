const changeRoute = () => {
  const childMain = document.querySelector("#main").children;
  for (let i = 0; i <= childMain.length; i++) {
    const e = childMain[i];
    document.querySelector("#main").removeChild(childMain[0]);
  }
};

export default changeRoute;
