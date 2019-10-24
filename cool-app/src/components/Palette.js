import React, {Component} from 'react';
import InstaServise from '../services/instaServise';
import ErrorMessage from './Error';

export default class Palette extends Component {
    InstaServise = new InstaServise();
    state = {
        error: false,
        photos: []
        
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaServise.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos
        })
    }


    renderItems(arr) {
        return arr.map(item => {
            const {src, alt} = item;

            return (
                <img src={src} alt={alt}></img>
            )
        })
    }

    render() {
        const {error, photos} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);

        return (
            <div className='palette'>
                {items}
            </div>
        )
    }
}
