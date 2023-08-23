import React from 'react'

function Table(props) {
    let {data} = props
  return (
    <div>
      
      <table className="table">
    <thead className="thead">
      <tr className="tr">
        <th className="th">Id</th>
        <th className="th">Name</th>
        <th className="th">Age</th>
      </tr>
    </thead>
    <tbody className="tbody">
      {data.map((x,i) =>{
        return(
          <tr className="trtd">
            <td className="td-td">{x.id}</td>
            <td className="td-td">{x.name}</td>
            <td className="td-td">{x.age}</td>
          </tr>
        )
      })}
    </tbody>
  </table>

    </div>
  )
}

export default Table
