import React from 'react'

const DisplayStudent = () => {
  
    const StudentInfo = [
        {
            Id : '01',
            Name : 'Nguyen Văn A',
            Age : '30',
            Address : 'Hà Nội'
        }
    ]
    
    return (
    <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </tr>
        {StudentInfo.map(student => (<tr
        key={StudentInfo}>
            <td>{student.Id}</td>
            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Address}</td>
        </tr>))}   
    </table>
  )
}

export default DisplayStudent