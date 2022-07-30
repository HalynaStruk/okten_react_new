import React, {useState} from 'react';

const Form2 = () => { // контрольовані форми

    const [user, setUser] = useState({})

    const getUser = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})

    }
    return (
        <div>
            <div><label>Name<input type="text" name={'name'} onChange={getUser}/></label></div>
            <div><label>Age<input type="number" name={'age'} onChange={getUser}/></label></div>
            {JSON.stringify(user)}
        </div>
    );
};

export {Form2};