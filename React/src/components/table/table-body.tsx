import * as React from 'react';
import {
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';

type TableBodyComponentType = {
    deserts: DesertType[]
    navigate: (str: string) => void
};

const TableBodyComponent:React.FC<TableBodyComponentType> = ({ deserts, navigate }) => (
  <TableBody>
    {deserts.map((row) => (
      <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="td" scope="row" onClick={() => navigate(`/details/${row.id}`)}>
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
          ))}
  </TableBody>
  );

export default TableBodyComponent;
