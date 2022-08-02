import React from 'react';

const UserDetails = ({user}) => {
    const {id, name, username, email, address: {street, suite, city}, phone, website } = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: {street}, {suite}, {city}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </div>
    );
};

export {UserDetails};