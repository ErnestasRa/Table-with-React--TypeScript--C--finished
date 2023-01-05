import * as React from 'react';
import {
  Box,
  Container,
  Paper,
} from '@mui/material';
import TableComponent from 'components/table/table';
import { useNavigate } from 'react-router-dom';

const MainPage:React.FC = () => {
  const [deserts, setDeserts] = React.useState<DesertType[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch('https://localhost:7090/Desert/api/deserts')
      .then((res) => res.json())
      .then((data) => setDeserts(data));
    };

    fetchData();
  }, []);

return (
  <Container>
    <Paper>
      <Box>
        <TableComponent
          deserts={deserts}
          navigate={navigate}
        />
      </Box>
    </Paper>
  </Container>
  );
};

export default MainPage;
