import axios from 'axios';
import React,{useState,useEffect} from 'react';

const ItemContext = React.createContext();

function ItemProvider(props){
    const [items,setItems] = useState([]);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState('');

    const fetchData = async() =>{
        try{
            const response = await axios.request('https://ecomerce-master.herokuapp.com/api/v1/item/');
            setItems(response.data)
            
        } catch (error){
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData();
    },[])



    const value={
        items,
        loading
    }

    return(
        <ItemContext.Provider value={value} {...props} />
    )
}

const useItemContext =()=>{
    const context = React.useContext(ItemContext);
    return context;
}

export {
    ItemProvider,
    useItemContext
}