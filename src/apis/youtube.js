import axios from 'axios';


const KEY = "AIzaSyD2YMOBN_eBF-kZ2RaxPz5kdZwxVB29mNk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});