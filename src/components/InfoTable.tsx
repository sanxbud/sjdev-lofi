type InfoTableProps ={
  columns:string[],
  rows:{
    tooltip?:string
    values: React.ReactNode[]
    }[]
  showHeaders?:boolean
}


export const InfoTable = ({columns,rows,showHeaders}:InfoTableProps) => {

  
    rows.forEach((row, i) => {
      if (row.values.length !== columns.length) {
        console.warn(`Invalid data in row ${i}: expected ${columns.length} values, got ${row.values.length}`);
      }
    });

  return (
 
    <table className="table-auto w-full">
      {showHeaders && (<thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="text-left p-2">{col}</th>
          ))}
        </tr>
      </thead>
      )}
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
