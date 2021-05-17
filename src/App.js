import React from 'react'
import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper'
function App() {
  return (
    <Wrapper>
      <Hello name="react"/>
      <Hello name="juhan" color="purple"/>
    </Wrapper>
  );
}

export default App;
