import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY_2 || "8fb041c0d2msh5d9379bba4c55cfp14834cjsn63fe77930f0d",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
