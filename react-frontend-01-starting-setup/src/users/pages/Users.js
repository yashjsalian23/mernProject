import React from 'react';
import UserList from '../components/UserList/UserList';
import "./Users.css";

const users = () => {
    const USERS =[{id: "1", name: "Yash Salian", places: "4", 
    image: "https://pbs.twimg.com/profile_images/861113484397862912/wXqLI8Ez_400x400.jpg"}] 

    return <UserList items={USERS} />
}

export default users;