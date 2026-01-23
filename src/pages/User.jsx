import UserForm from '../features/users/components/UserForm'
import TableUsers from '../features/users/components/tableUsers'
import ThemeButton from '../shared/components/themeButton'

export default function User() {
  return (
    <div>
        <UserForm/>
        <p>---------------------------------</p>
        <TableUsers/>
        <ThemeButton/>
    </div>
  )
}
