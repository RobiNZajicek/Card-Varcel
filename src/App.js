import React, { useState, useEffect } from 'react'
import { projectFirestore } from './firebase/config'
import logo from './assets/musleLogo.png'
import { FaTrashAlt } from 'react-icons/fa';
import Card from './components/card/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Form from './components/Form/Form';
import SharedLayout from './SharedLayout';
import CardPage from './components/CardPage/CardPage';


const App = () => {
  return <BrowserRouter>
            <Routes>
      <Route path='/' element={<SharedLayout />}>
               <Route path='/' element={<Form />} />
               <Route path='Card' element={<CardPage />} />
               
        </Route>
            </Routes>
  </BrowserRouter>
}

export default App