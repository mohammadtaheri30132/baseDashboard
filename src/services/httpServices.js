import axios from "axios";
import config from "./config.json";

const baseURL = ''
const Version = '/v2'
const Prefix = '/api'
const url = baseURL + Prefix + Version

const getLocalAccessToken = () => {
    return localStorage.getItem("localAccessToken");
}
const instance = axios.create({
    baseURL: config["BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Access-Control-Allow-Origin': '*',
    },
});
instance.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) {
            // @ts-ignore
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (err.response) {
            // Access Token was expired

            if (err.response.status === 403 && err.response.data) {

                return Promise.reject(err.response.data);
            }
        }
        return Promise.reject(err);
    }
);
export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch,

}
