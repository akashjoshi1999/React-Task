import React from 'react'
import './content.css'

const Content = ({ contentdata }) => {

    const nFormatter = (num) => {
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
                    <img alt="circle icon" className="circle-icon" src={contentdata.img} />
                </div>
                <div className="text">
                    <b>{contentdata.name}</b>
                </div>
                <div className="date">{contentdata.date}</div>
                <div className="submenu"></div>
            </div>
            <div className="dis">{contentdata.dis}</div>
            {
                contentdata.cat !== "NEWS" ?
                    <div className="time-view">
                        {contentdata.time} &nbsp;
                        <div className="cir"></div> &nbsp;
                        {nFormatter(contentdata.views)}
                    </div> : <div className="time-view">
                        {contentdata.details}
                    </div>
            }
        </div>
    )
}
export default Content;