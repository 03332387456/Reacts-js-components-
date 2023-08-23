import React from 'react'
function Card(props) {
  let {id, name, age, isActive ,inst } = props
  return (
    <div>
    <div>
      <p>Id : {id}</p>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>inst : {inst}</p>
      <p>Active : {isActive ? "Yes" : "No"}</p>
    </div>
  </div>
  )
}

export default Card
