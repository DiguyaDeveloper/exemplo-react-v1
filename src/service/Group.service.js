import Configuration from "../enviroments/Configuration";
import { toast } from "react-toastify";

const axios = require("axios");

export class GroupService {
    constructor() {
        this.config = new Configuration();
    }

    async getGroup(req) {

        // const data = new FormData();
        // data.append("hashtag", req.id);

        return axios
            .get(this.config.ITEM_COLLECTION_URL + `/group/hash/${req}`)
            .then((res) => {
                console.log(res);
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
            .finally(function () { });

    }

    async getRoom(req) {

        // const data = new FormData();
        // data.append("hashtag", req.id);

        return axios
            .get(this.config.ITEM_COLLECTION_URL + `/group/find/${req}`)
            .then((res) => {
                console.log(res);
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
            .finally(function () { });

    }

}