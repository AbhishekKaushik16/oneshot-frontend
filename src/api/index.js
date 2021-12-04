import axios from 'axios';

const URL = 'https://oneshot-backend-12.herokuapp.com';

export const getCollegeByState = async () => {
    try {
        const data = await axios.get(URL + '/colleges_by_state');
        return data;
    }catch(err){
        console.log(err);
    }
}

export const getCollegeData = async (id) => {
    try {
        const data = await axios.get(URL + '/college/' + id);
        return data;
    }catch(err){
        console.log(err);
    }

}