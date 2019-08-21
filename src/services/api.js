import axios from 'axios';

const KEY = "ba4487f101b9d1cbcf4f26a0a1989511b9a9f28d52eb1f87458da0e3fe1071c5";

//axios call for country api searching by country name
export const fetchCountries = async (name) => {
  const resp = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  return resp.data
}

//axios call for unsplash api
export const getPhotos = async (name) => {
  const resp = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${name}&client_id=${KEY}`)
  return resp.data.results
}