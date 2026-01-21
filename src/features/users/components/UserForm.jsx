import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../userSlice";

export default function UserForm() {
  const dispatch = useDispatch();
  const [user,setUser] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser((prev)=>({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nombre: </p>
          <input
            type="text"
            id="name"
            value={user.name}
            name="name"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Apellidos: </p>
          <input
            type="text"
            id="lastname"
            value={user.lastname}
            name="lastname"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Email: </p>
          <input
            type="email"
            id="email"
            value={user.email}
            name="email"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Phone: </p>
          <input
            type="tel"
            id="phone"
            value={user.phone}
            name="phone"
            required
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="button">Cancelar</button>
          <button type="submit">Crear Usuario</button>
        </div>
      </form>
    </div>
  );
}
