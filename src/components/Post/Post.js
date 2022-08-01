import React from 'react';

import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            {id} -- {title} <Button to={`${id}`} state={post}>get Details</Button>
            {/* to={`${id}`} має в урлу передатись, як стрінга
             state={post} запамятовує інформацію яка була вже стягнута з сервера
             */}
        </div>
    );
};

export {Post};