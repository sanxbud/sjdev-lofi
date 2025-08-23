type InfoTableProps ={
  columns:string[],
  rows:{
    tooltip?:string
    values: string[]
    }[]
}


export const InfoTable = ({columns,rows}:InfoTableProps) => {

  return (
 
    <table className="table-auto w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="text-left p-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} title={row.tooltip}>
            {row.values.map((val, j) => (
              <td key={j} className="p-2">{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

      )
}
