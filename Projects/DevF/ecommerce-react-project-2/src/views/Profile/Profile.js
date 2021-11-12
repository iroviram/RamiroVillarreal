import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import protect from '../../Utils/protect';

function Profile() {


    /* var myHeaders = new Headers();
    myHeaders.append("Authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTc4NjVkZjU5NjdmMDAxN2ZmOTM3YSIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTYyNTg3NDA3NywiaWF0IjoxNjI1Nzg3Njc3fQ.TKeEOklbDSBxBY2H0pMuaZpDfppiAIgjfQOr24tIQWU");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    axios.get("https://ecomerce-master.herokuapp.com/api/v1/user", requestOptions)
        .then(response => response.data)
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); */

        /* const [user,setUser] = useState([])

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
