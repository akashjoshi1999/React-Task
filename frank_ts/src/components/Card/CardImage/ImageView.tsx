import React from 'react';
import './ImageView.css';

interface typeOfData {
    imagecolor: string
    cat: string
}

const ImageView: React.FC<typeOfData> = (props: typeOfData) => {
    return (
        <div className="image-cat">
            <img alt="" src={props.imagecolor} className="img-low" />
            <p className="cat">{props.cat}</p>
        </div>
    )
}
export default ImageView;
