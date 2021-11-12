import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album_thumbnail">
                <img src={ album.thumbnailUrl} alt={album.name} />
            </div>
            <p className="name"> {album.name}</p>
        </div>
    );
}

export default Album;