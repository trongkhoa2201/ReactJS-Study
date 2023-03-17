import React from 'react'
import { useNavigate } from 'react-router-dom'
import {employeeData} from './employeeData'


function Employee(){


  const navigate = useNavigate()
  const handleShowDetail = (item) => {
    navigate('/detail',{state:item})
  }
  return (
    <div>
    <p>Employee Detail</p>
    <ul>
          {employeeData.map(item => (
            <li key={item.id}>
              <h2>Tên: {item.name}</h2>
              <p>Tuổi: {item.age}</p>
              <button onClick={handleShowDetail}>Details</button>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Employee