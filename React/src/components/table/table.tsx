import * as React from 'react';
import {
    Table,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box,
} from '@mui/material';
import TableHeadComponent from './table-head';
import TableBodyComponent from './table-body';

type TableComponentType = {
  deserts: DesertType[]
  navigate: (url: string) => void
};

const TableComponent: React.FC<TableComponentType> = ({ deserts, navigate }) => (
  <TableContainer component={Paper}>
    <Table
      sx={{
      minWidth: 650,
    }}
      size="small"
      aria-label="a dense table"
    >
      <TableHead>
        <TableRow>
          <TableHeadComponent />
        </TableRow>
      </TableHead>

      <TableBodyComponent
        deserts={deserts}
        navigate={navigate}
      />
    </Table>

    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '10vh',
    }}
    >
      <Button onClick={() => navigate('/newrecord')}>Add new record</Button>
    </Box>
  </TableContainer>
  );
export default TableComponent;
