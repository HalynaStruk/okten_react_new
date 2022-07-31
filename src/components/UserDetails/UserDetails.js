import React from 'react';

const UserDetails = ({userDetails, getUserId}) => {
const {id, name, username, email, address: {street, suite, city}, phone, website } = userDetails;
    return (
        <div>
            <h2>id:{id}</h2>
            <h3>name:{name}</h3>
            <h3>username:{username}</h3>
            <h3>email:{email}</h3>
            <h3>address:{street}, {suite}, {city}</h3>
            <h3>phone:{phone}</h3>
            <h3>website:{website}</h3>
            <button onClick={()=>getUserId(id)}>getPosts</button>
        </div>
    );
};

export {UserDetails};