import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import('./routes/home'));
const Dashboard = React.lazy(() => import('./routes/dashboard'))
const CarListing = React.lazy(() => import('./routes/listing'))
const CarDetails = React.lazy(() => import('./routes/details'))
const Login = React.lazy(() => import('./routes/login'))
const AboutUS = React.lazy(() => import('./routes/about'))
const PrivacyPolicy = React.lazy(() => import('./routes/privacyPolicy'))
const TermsAndConditions = React.lazy(() => import('./routes/termsConditions'))
const Reviews = React.lazy(() => import('./routes/reviews'))
const WhyUs = React.lazy(() => import('./routes/whyUs'))
import { SuspenseLoader } from './components/Loaders/SuspenseLoader';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { usePageTracking } from './hooks/usePageTracking';

import './App.css'


function App() {

  usePageTracking();

  return (

    <div className='w-full max-w-screen bg-gray-50'>
      <Header />
      <div className='w-full flex justify-center mx-auto min-h-[calc(100vh-160px)]'>
        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listing" element={<CarListing />} />
            <Route path="/details/:id" element={<CarDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about-us" element={<AboutUS />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App
