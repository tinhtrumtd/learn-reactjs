import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [

        {
            id:1,
            name: 'nhẹ nhàng cùng vpop',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/6/7/d/067d9c5fe474717246d63614483c9774.jpg',
        },
        {
            id:2,
            name: 'pop all start',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/2/c/0/22c0b5d3784459963cd344ac9fc6f0a3.jpg',
        },
        {
            id:3,
            name: 'vpop nhạc mới nổi bật',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/4/a/1/c4a113d397d7482080ef06b03d5109a2.jpg',
        },

    ];
    return (
        <div>
            <h2>có thể bạn sẽ yêu thích ở đây</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;