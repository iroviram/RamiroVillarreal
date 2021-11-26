import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import protect from '../../Utils/protect';
import payload from '../../Utils/payload';

function Profile() {


/*         const user = payload()
        const token = window.localStorage.getItem("token");
        const [user,setUser] = useState([])

        useEffect(() => {
            const token = window.localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `JWT ${token}`,
                    redirect:'follow'
                }
            }
            axios.get("https://ecomerce-master.herokuapp.com/api/v1/user", config)
                .then((response) => {
                    setUser(response)
                })
                .catch((error) => {
                    alert(error.response.data.message)
                })
        }, []) */

    
    return (
        <div>
            <Navbar />
            <h2>test</h2>
        </div>
    )
}

export default Profile
