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

export const getUserDetails = async () => {
    const user_id = "CIPH-e32e8c3a-4e96-49b2-b883-29cbca75cea7";

    try {

        const users = await axios.post(`${curr_url}/userdetails`, { user_id });
        return users.data;

    } catch (err) {
        console.log(err);
    }

}



export const editUser = async (user) => {

    try {
        console.log(user);

        return axios.post(`${curr_url}/editUser`, user);
    } catch (err) {
        console.log(err);
    }
}

