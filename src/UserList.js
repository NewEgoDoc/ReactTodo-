import React from 'react'

function User({user}){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}


function UserList(){
    const users = [
        {
            id: 1,
            username: 'james',
            email: 'james@naver.com'
        },
        {
            id: 2,
            username: 'john',
            email: 'john@naver.com'
        },
        {
            id: 3,
            username: 'kate',
            email: 'kate@naver.com'
        }
    ]
    return (
        <div>
            {users.map(user => (
                <User user={user}/>
            ))}
        </div>
    );
}

export default UserList;