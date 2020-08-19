import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    useEffect(() => {
        console.log('컴포넌트가 mount/설정됨(설정 이후)');
        console.log(user);
        return () => {
            console.log('컴포넌트 바뀌기 전/unmount');
            console.log(user);
        } 
    },[user])

    return (
        <div>
            <b style=
            {{
                color: active 
                ? "green" 
                : "black"
                , cursor : "pointer"
            }}
            onClick={() => onToggle(id)}
            >{username}</b><span>({email})</span>
            <button onClick={()=> onRemove(id)}>삭제</button>
        </div>
    )

}

function UserList({users, onRemove, onToggle}) {


    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User 
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;