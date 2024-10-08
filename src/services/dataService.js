import axios from 'axios';
import config from "./global"

const API_URL = config.host+'/data';

class GetData {
    async getdata() {
        const response = await axios.get(API_URL ).then(response => {
            //console.log(response);
            return response;

        }).catch(error => {
            //handle error
            console.log(error);
            //alert(error.response);
            if (error.message==="Network Error")
                {
                    error.response={}
                    error.response.message="ERR_NETWORK"
                    error.response.status=503;
                }
            return error.response;
        });
        return response;
    };
}

export default new GetData();