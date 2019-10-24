
import React, {Component} from 'react';
import InstaServise from '../services/instaServise';
import User from './User';
import ErrorMessage from './Error';


export default class Profiles extends Component {
    InstaServise = new InstaServise();
    state = {
        profiles: [],
        error: false
    }

    componentDidMount() {
        this.updateProfiles();
    }

    updateProfiles() {
        this.InstaServise.getAllProfiles()
         .then(this.onProfilesLoaded)
         .catch(this.onError);
    }

    onProfilesLoaded = (profiles) => {
        this.setState({
            profiles,
            error: false
        })
       
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, alt, photo,} = item;

            return (
               
             <div>
                <User 
                 src={photo} 
                 alt={alt}
                 name={name}
                 min/>

                 
                
            </div>
           
            )
        })
    }


    render() {

        const {error, profiles} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(profiles);

        return (

            <div className='right'>
                <User 
                  src='https://psycho4you.ru/wp-content/uploads/2018/04/Untitled-2-5.jpg' 
                  alt='man'
                  name='Scott'/>
             <div className='users__block'>
               {items}
               </div>
            </div>
        )
    }
}