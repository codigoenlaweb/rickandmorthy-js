console.log(location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/");

const getHash = (nmr = 1) =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[nmr] || "/";

export default getHash;
