import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from 'context/main-context';
import DetailsPage from 'pages/details-page';
import NewRecordForm from 'pages/new-record';
import MainPage from './pages/main-page';

const App: React.FC = () => (
  <MainContext.Provider value={undefined}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/newrecord" element={<NewRecordForm />} />
      </Routes>
    </BrowserRouter>
  </MainContext.Provider>
  );
export default App;
