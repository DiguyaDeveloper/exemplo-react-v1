import Configuration from "../enviroments/Configuration";
import { toast } from "react-toastify";

const axios = require("axios");

export class HashtagService {
    constructor() {
        this.config = new Configuration();
    }

    async getHashtag() {

        return axios
            .get(this.config.ITEM_COLLECTION_URL + "/hashtag")
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