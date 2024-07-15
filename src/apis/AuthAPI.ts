import { api } from "./configs/axiosConfig"
import axios from "axios"
import { defineCancelApiObject } from "./configs/axiosUtils"

export const AuthApi = {
    login: async function (_email: string, _password: string, cancel = false): Promise<void> {
        await api.request({
            url: `login/login`,
            method: "POST",
            data: {
            userName: _email,
            password: _password
            },
            signal: cancel ? cancelApiObject[this.login.name].handleRequestCancellation().signal : undefined,
        });
    },
    register: async function (_email: string, _password: string, cancel = false): Promise<void> {
        await api.request({
            url: `login/register`,
            method: "POST",
            data: {
            userName: _email,
            password: _password
            },
            signal: cancel ? cancelApiObject[this.register.name].handleRequestCancellation().signal : undefined,
        });
    },
    logout: async function (cancel = false): Promise<void> {
        await api.request({
            url: `login/logout`,
            method: "POST",
            signal: cancel ? cancelApiObject[this.logout.name].handleRequestCancellation().signal : undefined,
        });
    },
    me: async function (cancel = false): Promise<void> {
        await axios.request({
            url: `https://localhost:7234/api/login/me`,
            withCredentials: true,
            // maxRedirects: 0,
            method: "GET",
            signal: cancel ? cancelApiObject[this.me.name].handleRequestCancellation().signal : undefined,
        });
    },
  }

const cancelApiObject = defineCancelApiObject(AuthApi)
