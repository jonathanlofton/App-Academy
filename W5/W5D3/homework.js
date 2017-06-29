function madLib(verb, adj, noun) {
   console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
};

madLib("jump", "best", "house")

function isSubstring(searchString, subString) {
  if (searchString.includes(subString)) {
    return true
  };
  return false
};

console.log(isSubstring("hotdog are best", "hotdo"));
