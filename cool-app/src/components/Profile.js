import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className='container profile'>
            <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'/>
            <Palette/>
        </div>
    )
}

export default Profile;