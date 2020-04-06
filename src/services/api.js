const axios = require('axios')

export const clientAPICovid = axios.create({
    baseURL: `https://covid19-brazil-api.now.sh/api/report/v1`,
    headers: {
        'Content-Type' : 'application/json',
    }
})