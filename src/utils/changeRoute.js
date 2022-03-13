const changeRoute = () => {
    const childHeader = document.querySelector("#header").children;
    document.querySelector("#header").removeChild(childHeader[0])

    const childMain = document.querySelector("#main").children;
    document.querySelector("#main").removeChild(childMain[0])
}

export default changeRoute