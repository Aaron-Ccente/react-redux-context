import { useSelector } from "react-redux";

export default function TableUsers() {
  console.log("Usuarios en la local storage: ",JSON.parse(localStorage.getItem("users")))
  const userStore = useSelector((state)=>state.user.value);
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
