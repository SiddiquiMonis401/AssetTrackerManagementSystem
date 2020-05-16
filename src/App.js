import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import store from './Redux/store';
import { createStore } from 'redux';


export function App() {
  return (
    <PublicRoutes />
  );
}

