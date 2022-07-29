import axios from "axios";

export const getFetcher = (url) => axios.get(url).then((res) => res.data);