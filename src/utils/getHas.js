const getHash = (nmr = 1) =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[nmr] || "/";

export default getHash;
