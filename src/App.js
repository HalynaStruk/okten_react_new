import React, {useState} from 'react';

import {Posts, UserDetails, Users} from "./components";
import css from './App.module.css'
import {postService} from "./services";

const App = () => {
    const [userDetails, setUserDetails] = useState(null)
    const [posts, setPosts] = useState([])

    const getUserId = async (userId) => {
        const {data} = await postService.getPostByUserId(userId);
        setPosts(data);
        // або можливий такий запис(console.log тут щоб побачити який швидше виведеться )
        // postService.getPostByUserId(userId).then(({data}) => {
        // setPosts(data)
        // console.log(data); другий цей вивівся
        // })
        // console.log('getUserId'); перша це вивелось

    }

    const trigger = () => {
        setPosts([]);
    }

    return (
        <div>
            <div className={css.wrap}>
            <Users setUserDetails={setUserDetails} trigger={trigger}/>
            {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default App;