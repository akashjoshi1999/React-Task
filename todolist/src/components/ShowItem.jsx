import React from 'react';
import AllItem from './AllItem';

const ShowItem = (props) => {
    return (
        <div>
            { props.items.length === 0 ? "No items to display please add it first" :
            props.items.map((item)=>{
                return(
                    <>
                        <AllItem item={item} key={item.no} onItem={props.onItem} onEdit={props.onEdit} />
                    </>
                )
            })
            }
        </div>
    )
}
export default ShowItem;