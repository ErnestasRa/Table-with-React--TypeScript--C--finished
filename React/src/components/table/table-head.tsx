import * as React from 'react';
import {
    TableCell,
} from '@mui/material';

const TableHeadComponent:React.FC = () => (
  <>
    <TableCell>Dessert (100g serving)</TableCell>
    <TableCell align="right">Calories</TableCell>
    <TableCell align="right">Fat&nbsp;(g)</TableCell>
    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    <TableCell align="right">Protein&nbsp;(g)</TableCell>
  </>
  );

export default TableHeadComponent;
