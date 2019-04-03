const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function(films){
    const result = films.map(function(film){
      return film.title;
    });
    return result;
  };

Cinema.prototype.findByTitle = function(title){
  const result = this.films.find(function(film){
    return film.title === title;
  });
  return result;
};

Cinema.prototype.filterByGenre = function(genre){
  const result = this.films.filter(function(film){
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.checkFilmsByYear = function(year){
  const result = this.films.some(function(film){
    return film.year === year;
  });
  return result;
};

Cinema.prototype.checkEveryFilmByLength = function(length){
  const result = this.films.every(function(film){
    return film.length > length;
  });
  return result;
};

Cinema.prototype.totalRunningTime = function(films){
let total = films.reduce(function(sum, film){
    return sum + film.length;
  }, 0);
  return total;
};
module.exports = Cinema;
