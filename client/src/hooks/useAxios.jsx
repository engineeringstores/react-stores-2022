import axios from 'axios';

const useAxios = () => {
  // console.log(import.meta.env)
  const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
  });
  return { axios: instance };
};

export default useAxios;
