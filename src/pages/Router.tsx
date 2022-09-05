import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './IndexPage/IndexPage';

export const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<IndexPage />} />
  </Routes>
);
