import * as React from 'react';
import {
    Container,
    Paper,
    Box,
    TextField,
    Button,
} from '@mui/material';

type NewDesertInputsType = {
    current: HTMLInputElement | null
  };

type NewDesertFormType = {
    nameRef: NewDesertInputsType
    caloriesRef: NewDesertInputsType
    fatRef: NewDesertInputsType
    carbsRef: NewDesertInputsType
    proteinRef: NewDesertInputsType
    createNewDesert: VoidFunction
};

const NewDesertForm: React.FC<NewDesertFormType> = ({
    nameRef,
    caloriesRef,
    fatRef,
    carbsRef,
    proteinRef,
    createNewDesert,
}) => (
  <Container sx={{ height: '50vh' }}>
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          inputRef={nameRef}
        />
        <TextField
          id="standard-basic"
          label="Calories"
          variant="standard"
          inputRef={caloriesRef}
        />
        <TextField
          id="standard-basic"
          label="Fat"
          variant="standard"
          inputRef={fatRef}
        />
        <TextField
          id="standard-basic"
          label="Carbs"
          variant="standard"
          inputRef={carbsRef}
        />
        <TextField
          id="standard-basic"
          label="Protein"
          variant="standard"
          inputRef={proteinRef}
        />
        <Button onClick={() => createNewDesert()}>Add new desert</Button>
      </Box>
    </Paper>
  </Container>
  );

export default NewDesertForm;
