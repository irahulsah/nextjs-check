import axios from "axios";
export const ANIME = [];
const BASE_URL = "http://localhost:3000";
const CATAGORIES = [
  { id: "c-1", title: "all" },
  { id: "c-2", title: "music" },
  { id: "c-3", title: "drama" },
  { id: "c-4", title: "historic" }
];

export const getCatagories = () => {
  return new Promise((resolve, reject) => {
    return resolve(CATAGORIES);
  });
};
export const getMovie = () => {
  return axios.get(`${BASE_URL}/api/v1/movie`).then((res) => {
    return res.data;
  });
};
export const createMovie = (movie) => {
  movie.id = Math.random().toString(32).substr(2, 7);
  return axios.post(`${BASE_URL}/api/v1/movie`, movie).then((res) => {
    console.log(res.data);
  });
};

export const getAnimeById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movie/${id}`).then((res) => {
    return res.data;
  });
};
export const deleteMovieById = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movie/${id}`).then((res) => {
    });
  };
  
  export const updateMovieById = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movie/${movie.id}`,movie).then((res) => {
    });
  };
