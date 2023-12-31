import React from 'react'

interface User{
    id:number;
    name:string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache: 'no-store'});
    //const res = await fetch('https://jsonplaceholder.typicode.com/users',{next: {revalidate: 10}'}); 
    //other approch nextjs check for fresh data for every 10 seconds only will used for fetch not for axious 
    const users:User[] = await res.json();
    return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UserPage


