import * as React from 'react';
import post from 'functions/http';
import { useNavigate } from 'react-router-dom';
import NewDesertForm from 'components/desert-form/new-desert-form';

type NewDesertInputsType = {
  current: HTMLInputElement | null
};

type NewDesertInputType = {
  name: string,
  calories: string | number,
  fat: string | number,
  carbs: string | number,
  protein: string | number
};

const NewRecordForm: React.FC = () => {
  const nameRef: NewDesertInputsType = React.useRef(null);
  const caloriesRef: NewDesertInputsType = React.useRef(null);
  const fatRef: NewDesertInputsType = React.useRef(null);
  const carbsRef: NewDesertInputsType = React.useRef(null);
  const proteinRef: NewDesertInputsType = React.useRef(null);
  const navigate = useNavigate();

  const createNewDesert = async () => {
    const newDesert: NewDesertInputType = {
      name: nameRef.current!.value,
      calories: Number(caloriesRef.current!.value),
      carbs: Number(carbsRef.current!.value),
      fat: Number(fatRef.current!.value),
      protein: Number(proteinRef.current!.value),
    };
    await post('Desert/api/deserts/add', newDesert);
    navigate('/');
  };

return (
  <NewDesertForm
    caloriesRef={caloriesRef}
    carbsRef={carbsRef}
    fatRef={fatRef}
    nameRef={nameRef}
    proteinRef={proteinRef}
    createNewDesert={() => createNewDesert()}
  />
  );
};
export default NewRecordForm;
