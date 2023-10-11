import axios from 'axios'
import config from "../config/config";

export default axios.create({
    baseURL: config.apiHost,
    timeout: config.requestTimeout,
    headers: {
        'Authorization': config.apiToken
    //     token: config.apiPublicKey,
    //     "X-App-Name": config.appName,
    //     "X-App-Version": config.appVersion,
    //     "X-Business-Wing": "B2C",
    }
});
