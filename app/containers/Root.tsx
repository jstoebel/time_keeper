import * as React from 'react';
import { History } from 'history';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes';

interface IRootType {
  history: History
};

export default function Root({history }: IRootType) {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
