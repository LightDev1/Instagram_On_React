import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className='right'>
             <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'/>
            <div className='users__block'>
            <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'
                 min/>
             <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'
                 min/>
            <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'
                 min/>
            <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'
                 min/>
            </div>
        </div>
    )
}