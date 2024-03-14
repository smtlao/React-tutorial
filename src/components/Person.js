import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2> My Id is {person.id} I am {person.name}. I am {person.size}</h2>
    </div>
  )
}

export default Person
