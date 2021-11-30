import React from 'react';
import './ImageView.css';

const ImageView = (props) => {
    return (
        <div className="image-cat">
            <img alt="" src={props.imgdata} className="img-low" />
            <p className="cat">{props.cat}</p>
        </div>
    )
}
export default ImageView;