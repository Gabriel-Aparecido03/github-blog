import axios from "axios";

export const api = axios.create({baseURL : 'https://api.github.com/users/'})

export const apiRepos = axios.create({ baseURL : 'https://api.github.com/repos'})