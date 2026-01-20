import { useSelector } from "react-redux";

export default function TableUsers() {
  const userStore = useSelector((state) => state.user.value);

    if (userStore.length === 0) {
    return <div>No hay usuarios registrados</div>;
    }

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {userStore.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
