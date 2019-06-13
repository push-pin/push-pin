import React from 'react';
import Sidebar from '../components/nav/Sidebar';


function Student() {


  const image = '../../assets/thumbtack.png';
  return (
    <>
      <h1>Hey Student</h1>
      <Sidebar image={image}>
        <a onClick={() => updateSelected('teacher')} href="#">Home</a>
      </Sidebar>
      <p></p>
    </>
  )
}


export default Student;
