let movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "sci-fi" },
  { title: "The Notebook", year: 2004, rating: 7.8, genre: "romance" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "La La Land", year: 2016, rating: 8.0, genre: "romance" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "John Wick", year: 2014, rating: 7.4, genre: "action" },
];


// map — get an array of just the movie titles. done
// map — get an array of strings formatted like "Inception (2010)" for every movie. done
// filter — get only movies with a rating above 8.0. done
// filter — get only movies in the "sci-fi" genre. done
// reduce — find the average rating across all movies.
// reduce — find the highest-rated movie (the whole object, not just the rating).
// Combine filter + map — get just the titles of movies released after 2012.
// Combine filter + reduce — get the total count of movies in the "action" genre using filter, then double-check it differently using reduce to count by genre.

function getter () {
  let result = movies.map((item) => {
    return `${item.title} (${item.year})`
  })
  // console.log(result)
  return result
}

getter()

function filter() {
  let filteredMoives = movies.filter((item) => {
    return item.rating > 8.0
  })
  // console.log(filteredMoives)
  return filteredMoives
}

function filterByGenre() {
  let filteredMoives = movies.filter((item) => {
    return item.genre === "sci-fi";
  });
  console.log(filteredMoives);
  return filteredMoives;
}

filter()
filterByGenre()