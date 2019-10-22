import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className='left'>
                <Post src='https://devrahababa.com/wp-content/uploads/2018/01/full-moon-1.jpg' alt='inst' />
                <Post src='https://iskcon.kh.ua/wp-content/uploads/2016/10/content_pca4ee5245f8be098b596c09481d04a831_Dw041.jpg' alt='somebody' />
            </div>
        )
    }
}