import UserForm from '../features/users/components/UserForm'
import TableUsers from '../features/users/components/tableUsers'

export default function User() {
  return (
    <div>
        <UserForm/>
        <p>---------------------------------</p>
        <TableUsers/>
    </div>
  )
}
