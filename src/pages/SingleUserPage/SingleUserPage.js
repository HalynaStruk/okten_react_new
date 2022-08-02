import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import { userService} from "../../services";
import {Loading, UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();
    // useParams() відновлює динамічну частину в урлі, тут id

    useEffect(()=>{
        if (!state){
            userService.getById(userId).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    },[userId, state])
    return (
        <div>
            <div>
            {
                user
                ? <UserDetails user={user}/>
                    : <Loading/>
            }
            </div>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};