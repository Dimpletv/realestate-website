import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '4b7ca15711msh1325f5fb7158803p183476jsn09a4e7b68bf6',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}