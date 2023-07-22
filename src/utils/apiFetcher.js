import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = "https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5";

export const getData = async (saveData) => {
    try {
        const res = await axios.get(API_URL);
        saveData(res.data);
    } catch (err) {
        toast.error(err.message, { theme: "colored" });
    }
}