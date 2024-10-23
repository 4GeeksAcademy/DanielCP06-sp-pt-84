function generaDominios(pronoun, adj, noun, domain) {
  for (let iPron of pronoun) {
    for (let iAdj of adj) {
      for (let iNoun of noun) {
        for (let iDomain of domain) {
            console.log(iPron + iAdj + iNoun + iDomain);
        }
      }
    }
  }
}

let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "little"];
let noun = ["jogger", "racoones"];
let domain = [".com", ".es", ".net"];

generaDominios(pronoun, adj, noun, domain);