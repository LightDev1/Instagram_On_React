import React, {Component} from 'react';
import InstaServise from '../services/instaServise';
import User from './User';
import ErrorMessage from './Error';


export default class Posts extends Component {
    InstaServise = new InstaServise();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaServise.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
        console.log(this.state);
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className='post'>
                <User 
                 src={photo} 
                 alt={altname}
                 name={name}
                 min/>
                <img src={src} alt={alt}></img>
                <div className='post__name'>
                    {name}
                </div>
                <div className='post__descr'>
                   {descr}
                </div>
            </div>
            )
        })
    }


    render() {

        const {error, posts} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className='left'>
               {items}
            </div>
        )
    }
}