import React,{useState,useEffect} from 'react'
import './home.css';
import Items from '../../components/Items/Items';

//buscar useContext Hook

const Home = () => {
    const[items,setItems] = useState([]);
    const[search,setSearch] = useState('');

    const {response,loading,error} = useAxios({
        method:'GET',
        url: 'item'
    });

    const handleChange =e=>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        if(response !== null){
            setItems(response);
        }
    },[response]);

    const filteredItems = items && items.filter(items =>
        items.product_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Home</h1>

            <div className="item-app">

                <div className="item-search">
                    <form>
                        <input 
                            className='item-search-input'
                            type="text" 
                            onChange={handleChange}
                            placeholder='Search Item'
                        />
                    </form>
                </div>

                {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}

                {items && 
                    <ul className="items">
                        {filteredItems.map(item => {
                            return(
                                <Items
                                    key={item._id}
                                    name={item.product_name}
                                    image={item.image}
                                    brand={item.brand}
                                    price={item.price}
                                />
                            )
                        })

                        }
                    </ul>
                }
            </div>
        </>
    )
}

export default Home
