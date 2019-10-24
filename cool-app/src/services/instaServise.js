export default class InstaServise {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }

        return await res.json();

    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }

    getAllProfiles = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformProfiles);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }

    _transformProfiles = (profile) => {
        return {
            name: profile.name,
            src: profile.src,
            alt: profile.alt
        }
    }

}