import React, {useState} from 'react';

import {Form1, Form2, SingleUser, Users} from "./components";
// import css from './App.module.css'

const App = () => {
    const [singleUser, setSingleUser] = useState(null);
    // const getUser = (user) => {
    //     setSingleUser(user);
    // }

    return (
        // <div className={css.w200}> якщо прописуємо стилі
        <div>
            <Form1/>
            {singleUser && <SingleUser user={singleUser}/>}
            <Users getUser={setSingleUser}/>
            <Form2/>
        </div>
    );
};

export default App;