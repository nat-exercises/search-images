import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID s6-ri4esE0l07WNa1e4DBs7W-T5GFXOlH5lop4QkQs8",
  },
});
