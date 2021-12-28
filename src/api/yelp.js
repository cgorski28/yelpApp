import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 74h7p9tsg_xJMBXyOmku7JY_ib6ohzge2TGt--QBg_tqYgDHQHEPXBdodx5D4bCYUxjdq5PVbC1YZmyIV25YxXsjOTtPyxMbxwDf5t7H6mG4-lpCajV793L8r4zEYXYx'
    }
});