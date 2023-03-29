import axios from 'axios';
const curr_url = process.env.REACT_APP_BACKEND_URL

export const adduser = async (user) => {
    try {
        console.log(user);

        return axios.post(`${curr_url}/adduser`, user);
    } catch (err) {
        console.log(err);
    }

}
export const getFollowers = async () => {
    try {

        const followers = await axios.get(`${curr_url}/getfollowers`);

        return followers.data.followers;

    } catch (err) {
        console.log(err);
    }

}
 