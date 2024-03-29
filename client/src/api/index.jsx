import axios from 'axios';
const DEV_URL = 'http://localhost:5000/';
const PROD_URL = "https://petreunitehub.onrender.com" ;
const API = axios.create({
   //baseURL : PROD_URL
  baseURL : DEV_URL
});

API.interceptors.request.use((req)=>{
  if(localStorage.getItem('user-profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user-profile')).token}`;
  }
  return req;
});

//posts
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery}`);
export const CreatePost = (newPost) => API.post('/posts', newPost);
export const UpdatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const DeletePost = (id) => API.delete(`/posts/${id}`);

//auth
export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);
export const deleteAccount = (id) => API.delete(`/auth/deleteAccount/${id}`);
