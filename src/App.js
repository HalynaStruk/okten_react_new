import React from 'react';

import {Posts, UserDetails, Users} from "./components";
import css from './App.module.css'

const App = () => {
    return (
        <div>
            <div className={css.wrap}>
            <Users/>
            <UserDetails/>
            </div>
            <Posts/>
        </div>
    );
};

export default App;