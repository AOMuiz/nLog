import authors from "../../meta/authors.yml";

const authorMap = generateAuthorMap();

function generateAuthorMap() {
  let result = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

// console.log(authorMap);

export function getAuthor() {
  return authorMap[slug];
}
