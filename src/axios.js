import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazoncloneee.herokuapp.com/",
});

export default instance;
