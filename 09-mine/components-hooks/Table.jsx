import React, { memo, useContext } from "react";
import { TableContext } from "./MineSearch";
import Tr from "./Tr";

const Table = memo(() => {
  // todo
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
});

export default Table;
