import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '19e5eff6adba4becbdeb70f2ec4cd963'
    }
});
