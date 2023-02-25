import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('Profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('Profile')).token
    }`;
  }
  return req;
});
export const signup = (formData) => API.post('/users/signup', formData);
export const signin = (formData) => API.post('/users/signin', formData);
export const updateUser = ({ id, formData }) =>
  API.patch(`/users/editUser/${id}`, formData);
export const deleteUser = (id) => API.delete(`/users/delete/${id}`);
export const getAllProducts = () =>
  API.get('/products/getallproductsforclients');
export const getSingleProduct = (id) =>
  API.get(`/products/getsingleproduct/${id}`);
/* export const getfilteredproducts = ({}) =>
  API.get(`/products/getsingleproduct/?search=${}&rating=${}&sort=${},${}}`); */
