import React from 'react';
import {Posts, UserDetails, Users} from "./components";

const App = () => {
    return (
        <div>
            <div>
            <Users/>
            <UserDetails/>
            </div>
            <Posts/>
        </div>
    );
};

export default App;