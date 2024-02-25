import axios from "axios";
import DATA from "./localDB";

const serverUrl = "http://localhost:3001/";

const bindUrl = (path) => serverUrl + path;
const isLocal = true;
const REMOTEAPI = {
  get: (path) => {
    return axios.get(bindUrl(path));
  },
  getById: (path, id) => {
    return axios.get(bindUrl(path) + "/" + id);
  },
  put: (path, body) => {
    return axios.put(bindUrl(path), body)
  }
};

const LOCALAPI = {
  get: (path) => {
    return new Promise((resolve, reject) => {
      try {
        const res = { data: DATA[path] };
        resolve(res);
      } catch (e) {}
    });
  },
  getById: (path, id) => {
    return new Promise((resolve, reject) => {
      try {
        const res = { data: DATA[path].find((e) => e._id === id) };
        resolve(res);
      } catch (e) {}
    });
  },
  put: (path, body) => {
    return new Promise((resolve, reject) => {
        try {
          const res = { data: DATA[path].find((e) => e._id === body._id) };
          resolve(res);
        } catch (e) {}
      });
  }
};

const API = isLocal ? LOCALAPI : REMOTEAPI;

export default API;
