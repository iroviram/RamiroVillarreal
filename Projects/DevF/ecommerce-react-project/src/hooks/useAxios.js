import axios from 'axios';
import {useState,useEffect} from 'react';

axios.defaults.baseURL = process.env.REACT_APP_API_URI || 'https://ecomerce-master.herokuapp.com/api/v1/';

/*
Credits: Yogini Bende (2021)
https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
*/

/**
    fixed :
    - no need to JSON.stringify to then immediatly do a JSON.parse
    - don't use export defaults, because default imports are hard to search for
    - axios already support generic request in one parameter, no need to call specialized ones
**/

function useAxios (axiosParams){
    const [response,setResponse] = useState(undefined);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(true);

    const fetchData = async(params) =>{
        try{
            const result = await axios.request(params);
            setResponse(result.data)
            console.log(result.data)
        } catch (error){
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData(axiosParams);
    },[])

    return {response,error,loading};
};

export default useAxios;
