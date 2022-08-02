import React, {useContext, useEffect, useState} from 'react';

import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import {MyContext} from "../../index";

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const value = useContext(MyContext);
    const {userId} = useParams()
    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(()=>{
        if (userId) {
            postService.getByUserId(userId, query.get('page'), 10).then(({data})=>setPosts(data))
        } else {
            postService.getAll(query.get('page'), 10).then(({data})=>setPosts(data))
        }
    }, [userId, query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page + 1;
        // setQuery({page:page.toString()})
        const queryObject = Object.fromEntries(query.entries());
        queryObject.page++;
        setQuery(queryObject)
    }

    return (
        <div style={{display:'flex'}}>
            <div>
                {posts.map(post=><Post key={post.id} post={post} flag={!userId}/>)}
                <button onClick={()=>nextPage()}>Next</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostPage};