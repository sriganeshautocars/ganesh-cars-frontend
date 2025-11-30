import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import('./routes/home'));
const Dashboard = React.lazy(() => import('./routes/dashboard'))
const CarListing = React.lazy(() => import('./routes/listing'))
const CarDetails = React.lazy(() => import('./routes/details'))
const Login = React.lazy(() => import('./routes/login'))
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './App.css'

function App() {

  return (
    <div className='w-full max-w-screen'>
      <Header />
      <div className='w-full flex justify-center mx-auto min-h-[calc(100vh-160px)]'>
        <Suspense fallback={<div className='w-full flex items-center justify-center min-h-[60vh]'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listing" element={<CarListing />} />
            <Route path="/details/:id" element={<CarDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App
