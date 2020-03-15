import React from 'react';
import UserItem from "../UserItem/UserItem";
import "./UserList.css";

const userList = props => {
    if(props.items.length ===0){
        return <div className="Centre">
            <h1>No Users</h1>
        </div>
    }

    return (
        <ul className="user-list">
            {props.items.map(user => 
                <UserItem 
                key={user.id}
                 id={user.id} 
                 image={user.image} 
                 name={user.name} 
                 placeCount={user.places} />    
            )}
        </ul>
        
    )

    
}

export default userList;