import React from "react";

const UserData = ({user}) => {
    return (
        <div className="w-full text-lg p-2 border-b-2 border-main-color flex hover:border-hover-color hover:bg-hover-bg-color hover:cursor-pointer hover:text-white">
            <div className="table-data-cell">{user.name}</div>
            <div className="table-data-cell">{user.email}</div>
            <div className="table-data-cell">{user.address.city}</div>
        </div>
    )
}

export default UserData