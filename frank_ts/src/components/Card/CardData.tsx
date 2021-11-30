import React from 'react'
import Content from './CardContent/Content';
import ImageView from './CardImage/ImageView';
import Data from '../../Json/Data.json';
import './CardData.css'

const CardData: React.FC = () => {
    return (
        <>
            {
                Data.map((val: any, id: number) => (
                    <div className="card" key={id}>
                        <div className="card-item">
                            <ImageView imagecolor={val.imagecolor} cat={val.cat} />
                            <Content {...val} />
                        </div>
                    </div>
                ))
            }
        </>
    );
}
export default CardData;