import axios from "axios";

const wiki = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    action: "query",
    list: "search",
    format: "json",
    origin: "*",
  },
});

export default wiki;
