import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjA5NDVlMjY3MjZiZDE1NzZlNWU3NyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDYwNzEzNjgsImV4cCI6MTcwNjMzMDU2OH0.Z8mhmEojKq2FsVoWVA01WwnuNcwiWX5D9amdpJpMklU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
