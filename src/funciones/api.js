import axios from 'axios'

export default {
    getData: () =>
        axios({
            'method': 'GET',
            'url': process.env.API_URL
        })
}