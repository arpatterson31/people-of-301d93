import React from 'react';
import Person from './Person';
import data from './data/data.json'
import './Main.css'

class Main extends React.Component{
  render(){

    return (
      <>
      <main>
        {data.map((person) => {
          return <Person name={person.name} imageURL={person.imageURL}/>
        })}

      </main>
      </>

    )
  }

}

export default Main;