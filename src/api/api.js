import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-curs.herokuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const ENDPOINTS = {
  LOGIN: "/users/login",
  REGISTER: "users/register",
  GET_ALL_USERS: "/users",
  POSTS: "/posts",
};

export const api = {
  login: async (email, password) => {
    try {
      const { data, status } = await instance.post(ENDPOINTS.LOGIN, {
        email,
        password,
      });
      return { data, status };
    } catch (err) {
      return { data: err.message, status: 500 };
    }
  },
  register: async (first_name, last_name, email, password) => {
    try {
      const { data, status } = await instance.post(ENDPOINTS.REGISTER, {
        first_name,
        last_name,
        email,
        password,
      });
      return { data, status };
    } catch (err) {
      return { data: err.message, status: 500 };
    }
  },
  createPost: async ({ author, content, likes, comments, shares }) => {
    try {
      const { data, status } = await instance.post(ENDPOINTS.POSTS, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
        data: {
          author,
          content,
          likes,
          comments,
          shares,
        },
      });
      return { data, status };
    } catch (err) {
      return { data: err.message, status: 500 };
    }
  },
  getPosts: async () => {
    try {
      const { data, status } = await instance.get(ENDPOINTS.POSTS, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      });
      return { data, status };
    } catch (err) {
      return { data: err.message, status: 500 };
    }
  },
  getUsers: async () => {
    try {
      const { data, status } = await instance.get(ENDPOINTS.GET_ALL_USERS, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      });
      return { data, status };
    } catch (err) {
      return { data: err.message, status: 500 };
    }
  },
};
