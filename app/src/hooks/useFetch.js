import { useState, useEffect } from "react";
import axios from "axios";
import {API} from "../api";

const useFetch = (endpoint) => {
//state
    
    const [data, setData] = useState(null);
    

//side effect
useEffect(() => {
    axios
    .get(`${API}${endpoint}`)
    .then((result) => setData(result.data));
    
}, [endpoint])

return [data];

};
export default useFetch;