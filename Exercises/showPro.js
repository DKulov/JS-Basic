// Exercise showProperties

// Pass an object in and get all of his string properties

function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === "string") console.log(key, object[key]);
  }
}

const movie = {
  name: "a",
  releaseYear: 2015,
  rating: 4 / 5,
  creator: "b",
};

showProperties(movie);
