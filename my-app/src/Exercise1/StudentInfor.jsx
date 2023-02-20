import students from "./data"
import '../Exercise1/StudentInfor.css'

const StudentInfor = () => {
  return (
    <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        {students.map(student => (
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        ))}
    </table>
  )
}

export default StudentInfor