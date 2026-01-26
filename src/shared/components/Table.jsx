export function Table({ t_head, t_body, actions }) {
  return (
    <div className="m-auto max-w-3/4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-background border-b-2 border-border">
          <tr>
            {t_head.map((head, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-semibold text-foreground"
              >
                {head.title}
              </th>
            ))}
            {actions && (
              <th className="px-4 py-3 text-center font-semibold text-foreground">
                Acciones
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {t_body.map((row, index) => (
            <tr
              key={index}
              className="bg-background/90 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-700 text-foreground font-light"
            >
              {t_head.map((head, i) => (
                <td
                  key={i}
                  className="px-4 py-3"
                >
                  {row[head.key]}
                </td>
              ))}

              {actions && (
                <td className="px-4 py-3 text-center">
                  {actions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty state */}
      {t_body.length === 0 && (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
          No hay datos para mostrar
        </div>
      )}
    </div>
  )
}
