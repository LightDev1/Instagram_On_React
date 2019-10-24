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

// import React, {Component} from 'react';
// import InstaServise from '../services/instaServise';
// import User from './User';
// import ErrorMessage from './Error';


// export default class Profiles extends Component {
//     InstaServise = new InstaServise();
//     state = {
//         posts: [],
//         error: false
//     }

//     componentDidMount() {
//         this.updateProfiles();
//     }

//     updateProfiles() {
//         this.InstaServise.getAllProfiles()
//         .then(this.onProfilesLoaded)
//         .catch(this.onError);
//     }

//     onProfilesLoaded = (posts) => {
//         this.setState({
//             posts,
//             error: false
//         })
//         console.log(this.state);
//     }

//     onError = () => {
//         this.setState({
//             error: true
//         })
//     }

//     renderItems(arr) {
//         return arr.map(item => {
//             const {name, altname, photo, src, alt, descr, id} = item;

//             return (
//                 <div key={id} className='post'>
//                 <User 
//                  src={photo} 
//                  alt={altname}
//                  name={name}
//                  min/>
//                 <img src={src} alt={alt}></img>
//                 <div className='post__name'>
//                     {name}
//                 </div>
//                 <div className='post__descr'>
//                    {descr}
//                 </div>
//             </div>
//             )
//         })
//     }


//     render() {

//         const {error, profiles} = this.state;

//         if (error) {
//             return <ErrorMessage/>
//         }

//         const items = this.renderItems(profiles);

//         return (
//             <div className='left'>
//                {items}
//             </div>
//         )
//     }
// }