import React, { useMemo, useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputStream from './InputSample';
import UserList from './UserList'
import CreateUser from './CreateUser'

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user=>user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username:'',
    email: ''
  })

  const {username , email} = inputs;
  const onChange = e =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'james',
        email: 'james@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'john',
        email: 'john@naver.com',
        active: false
    },
    {
        id: 3,
        username: 'kate',
        email: 'kate@naver.com',
        active: false
    }
  ])

  const nextId = useRef(4);

  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    };

    //setUsers([...users,user]);
    setUsers(users.concat(user))  
    setInputs({
      username:'',
      email:''
    })
    nextId.current+=1;
  }

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const count = useMemo(() => countActiveUsers(users),[users]);
  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
    <Counter />
    <InputStream />
    <CreateUser 
      username = { username }
      email = { email }
      onChange = { onChange }
      onCreate = { onCreate }
    />
    <UserList users={ users } onRemove = { onRemove } onToggle={onToggle}/>
    <div>활성사용자 수: {count}</div>
   </>
  )
}

export default App;