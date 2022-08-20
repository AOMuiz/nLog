import authors from "../../meta/authors.yml";

function generateAuthorMap() {
  let result = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

export function getAuthor() {
  return authorMap[slug];
}
