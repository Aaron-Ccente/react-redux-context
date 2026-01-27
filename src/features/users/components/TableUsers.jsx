import { Table } from "@shared/components/Table";

export default function TableUsers() {

  const t_head = [
    { title: "Nombre", key: "name" },
    { title: "Email", key: "email" },
  ];

  const t_body = [
    { name: "AA", email: "aa@mail.com" },
    { name: "Ana", email: "ana@mail.com" },
  ];

  return (
    <Table
      t_head={t_head}
      t_body={t_body}
      actions={(row) => (
        <button onClick={() => console.log(row)}>Editar</button>
      )}
    />
  );
}
