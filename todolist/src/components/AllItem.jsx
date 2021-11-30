import React from 'react'

const AllItem = ({ item, onItem }) => {
    const onEdit = () => {

    }
    return (
        <div>

            <div>
                Name : <input value={item.fname} disabled="true" /> <input disabled="true" value={item.lname} />
                <button className="btn btn-sm btn-danger"
                    onClick={() => { onItem(item) }}>Delete</button>
                <button className="btn btn-sm btn-danger"
                    onClick={onEdit}>Edit</button>
            </div>
        </div>
    )
}
export default AllItem;