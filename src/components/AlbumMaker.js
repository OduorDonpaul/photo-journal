import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries.json';

class AlbumMaker extends React.Component{

    render(){

        console.log(entries)

        return(
            <div className='flex-container'>
                {
                    entries.itemlist.map((photo) => {
                    return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />
                    })
                }
                {/*<PhotoEntry src='6.jpg' location='Londan, UK' caption='Trafalga Square' />*/}
            </div>
        )
    }
}

export default AlbumMaker;