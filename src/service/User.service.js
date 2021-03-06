import Configuration from "../enviroments/Configuration";
import { toast } from "react-toastify";
import { getToken } from "./Auth.service";

const axios = require("axios");

const api = axios.create({
  baseURL: Configuration.ITEM_COLLECTION_URL,
});

api.interceptors.request.use(async (configure) => {
  const token = getToken();
  if (token) {
    configure.headers.Authorization = `Bearer ${token}`;
  }
  return configure;
});

export class UserService {
  constructor() {
    this.config = new Configuration();
  }

  async createUser(newUser, file) {
    const data = new FormData();
    data.append("fullname", newUser.fullname);
    data.append("email", newUser.email);
    data.append("username", newUser.username);
    data.append("password", newUser.password);
    data.append("state", newUser.state);
    data.append("country", newUser.country);
    data.append("help", newUser.help);
    data.append("picture", file);

    return axios
      .post(this.config.ITEM_COLLECTION_URL + "/users/v2", data)
      .then((res) => {
        toast.success("Success create user");
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.error);
              return error.response.data;
            case 500:
              return "erro interno";
            default:
              break;
          }
          console.log(error);
        }
      })
      .finally(function () {});
  }

  async getImagemUser() {
    return axios
      .get(this.config.ITEM_COLLECTION_URL + "/imagem")
      .then((res) => {
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.error);
              return error.response.data;
            case 500:
              return "Internal error";
            default:
              break;
          }
          console.log(error);
        }
      })
      .finally(function () {});
  }

  async confirmEmail(userId, codigo) {
    const body = { user_id: userId, codigo: codigo };

    return axios
      .post(
        this.config.ITEM_COLLECTION_URL + "/users/update_accountStatus_code",
        body
      )
      .then((res) => {
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.error);
              return error.response.data;
            case 500:
              return "Internal error";
            default:
              break;
          }
          console.log(error);
        }
      })
      .finally(function () {});
  }

  async resetPassword(req) {
    const body = { email: req.email };

    return axios
      .put(this.config.ITEM_COLLECTION_URL + "/users/new_password", body)
      .then((res) => {
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.error);
              return error.response.data;
            case 500:
              return "Internal error";
            default:
              break;
          }
          console.log(error);
        }
      })
      .finally(function () {});
  }

  async authenticate(req) {
    const body = { email: req.email, password: req.password };

    return axios
      .post(this.config.ITEM_COLLECTION_URL + "/users/authenticate", body)
      .then((res) => {
        ///setStore(res);
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.error);
              return error.response.data;
            case 500:
              return "Internal error";
            default:
              break;
          }
          console.log(error);
        }
      })
      .finally(function () {});
  }

  async putProfile(newUser, token, file) {
    const data = new FormData();
    data.append("fullname", newUser.fullname);
    data.append("email", newUser.email);
    data.append("username", newUser.username);
    data.append("password", newUser.password);
    data.append("state", newUser.state);
    data.append("country", newUser.country);
    data.append("help", newUser.help);
    data.append("picture", file);

    return axios
      .put(this.config.ITEM_COLLECTION_URL + "/users", data)
      .then((res) => {
        toast.success("Success update profile");
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.error);
              return error.response.data;
            case 500:
              return "erro interno";
            default:
              break;
          }
          console.log(error);
        }
      })
      .finally(function () {});
  }
}
