import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        userService.getAll().then(({data}) => setUsers(data))
    },[]);

    return (

        <div style={{display:'flex'}}>
            <div>
            {
                users
                ? users.map((user) => <User key={user.id} user={user}/>)
                    :'Loading..'
            }
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};