import React from 'react'
import './content.css'

interface typeOfData {
    img: string
    name: string
    date: string
    dis: string
    time: string
    views: string
    cat: string
    details: string
}

const Content: React.FC<typeOfData> = (props: typeOfData) => {

    const nFormatter = (num: any) => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }

    return (
        <div className="content">
            <div className="img-name-date">
                <div className="circle-icon">
                    <img alt="circle icon" className="circle-icon" src={props.img} />
                </div>
                <div className="text">
                    <b>{props.name}</b>
                </div>
                <div className="date">{props.date}</div>
                <div className="submenu"></div>
            </div>
            <div className="dis">{props.dis}</div>
            {
                props.cat !== "NEWS" ?
                    <div className="time-view">
                        {props.time} &nbsp;
                        <div className="cir"></div> &nbsp;
                        {nFormatter(props.views)}
                    </div> : <div className="time-view">
                        {props.details}
                    </div>
            }
        </div>
    )
}
export default Content;
