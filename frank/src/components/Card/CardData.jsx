import React from 'react'
import Content from './CardContent/Content';
import ImageView from './CardImage/ImageView';
import Data from '../../Json/data.json';
import './CardData.css'

const Card = () => {
    return (
        <>
            {
                Data.map((val, id) => (
                    <div className="card" key={id}>
                        <div className="card-item">
                            <ImageView imgdata={val.imagecolor} cat={val.cat} />
                            <Content contentdata={val} />
                        </div>
                    </div>
                ))
            }
        </>
    );
}
export default Card;