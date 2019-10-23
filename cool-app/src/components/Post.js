import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className='post'>
                <User 
                 src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                 alt='man'
                 name='Scott'
                 min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='post__name'>
                    some acount
                </div>
                <div className='post__descr'>
                    gfdgfdgfdgffdfgfgfdgfdgfdgfdgfdgfdgfdgfdggfdgfdgf
                    gdfgfdgfdgfdgfdgfdgfdgfndfhfgnhtrgrthtrehgetrhtrhtrhtr
                    htrhtrhgterhterhtrehtrehterhterhtehtehtehtehteh
                    hehtehtehethehehehe
                </div>
            </div>
        )
    }
}