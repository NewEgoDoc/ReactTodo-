import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputStream from './InputSample';
import UserList from './UserList'

function App() {
  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
    <Counter />
    <InputStream />
    <UserList/>
   </>
  )
}

export default App;