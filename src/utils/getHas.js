const getHash = () =>
  location.hash.slice(0).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;
