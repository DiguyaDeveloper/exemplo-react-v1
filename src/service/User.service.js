import Configuration from "../enviroments/Configuration";
import { toast } from "react-toastify";

const axios = require("axios");

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
}
