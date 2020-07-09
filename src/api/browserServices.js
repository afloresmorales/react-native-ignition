export default class BrowserServices {
  getMovies() {
    return fetch('https://reactnative.dev/movies.json').then((response) =>
      response.json(),
    );
  }
}
