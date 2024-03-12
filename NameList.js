import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{
        id: 1,
        name: 'Eyo',
        size: 'Smol'
    },
    {
        id: 2,
        name:'Ayo',
        size: 'Mid'
    },
    {
        id: 3,
        name: 'Oya',
        size: 'Beeg'
    }
]
const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
