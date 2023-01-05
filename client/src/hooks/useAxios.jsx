import axios from 'axios';

const useAxios = () => {
  // console.log(import.meta.env)
  const instance = axios.create({
    baseURL: 'https://react.stores.skule.ca/api',
    withCredentials: true,
  });
  return { axios: instance };
};

export default useAxios;
