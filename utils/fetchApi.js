import axios from "axios";

const baseUrl = "https://imdb-api.com/en/API/Search/";
const apiKey = "k_6ar2gu5e";

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}${apiKey}/${url}`);
  console.log(data);

  return data;
};
