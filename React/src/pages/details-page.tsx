import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Paper,
  Container,
  Typography,
  Button,
} from '@mui/material';

const DetailsPage:React.FC = () => {
  const [singleDesert, setSingleDesert] = React.useState<any>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getSingleDesert = async () => {
      await fetch(`https://localhost:7090/Desert/api/deserts/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleDesert(data));
    };

    getSingleDesert();
  }, []);

  return (
    <Container>
      <Paper>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        }}
        >
          <Typography variant="h6">
            Name:
            {singleDesert.name}
          </Typography>
          <Typography>
            Calories:
            {' '}
            {singleDesert.calories}
          </Typography>
          <Typography>
            Fat:
            {' '}
            {singleDesert.fat}
            {' '}
            (g)
          </Typography>
          <Typography>
            Carbs:
            {' '}
            {singleDesert.carbs}
            {' '}
            (g)
          </Typography>
          <Typography>
            Protein:
            {' '}
            {singleDesert.protein}
            {' '}
            (g)
          </Typography>
        </Box>
        <Button onClick={() => navigate('/')}>Back</Button>
      </Paper>
    </Container>
  );
};
export default DetailsPage;
