
const API_KEY = "8dbf780bb4c0fd5e70858a66fae3d670";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&anguage-en.US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComadyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language-en.US&page=1`,
};
export default requests;