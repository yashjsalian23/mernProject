import React from 'react';
import UserItem from "../UserItem/UserItem";
import Card from "../../../shared/components/UIElements/Card/Card";
import "./UserList.css";

const userList = props => {
    if(props.items.length ===0){
        return <div className="Centre">
            <h1><Card>No Users</Card></h1>
        </div>
    }

    return (
        <ul className="users-list">
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