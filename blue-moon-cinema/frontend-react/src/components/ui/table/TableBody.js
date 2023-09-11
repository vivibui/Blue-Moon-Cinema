const TableBody = ({ columns, tableData }) => {
    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.reservationId}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "——";
          return <td key={accessor}>{tData}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;